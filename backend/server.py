from fastapi import FastAPI, APIRouter, HTTPException, Query
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone
from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# ============ MODELS ============

class Category(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    icon: str
    description: str
    order: int = 0

class CategoryCreate(BaseModel):
    name: str
    slug: str
    icon: str
    description: str
    order: int = 0

class Product(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    category_slug: str
    brand: str
    summary: str
    bullets: List[str]
    specs: Dict[str, Any]
    compatibility: List[str]
    images: List[str]
    status: str  # buy|quote|rental|discontinued
    inventory_state: str  # in_stock|low|by_order|discontinued
    price: Optional[float] = None
    currency: str = "CLP"
    vat_included: bool = True
    tags: List[str] = []
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ProductCreate(BaseModel):
    name: str
    slug: str
    category_slug: str
    brand: str
    summary: str
    bullets: List[str]
    specs: Dict[str, Any]
    compatibility: List[str]
    images: List[str]
    status: str
    inventory_state: str
    price: Optional[float] = None
    currency: str = "CLP"
    vat_included: bool = True
    tags: List[str] = []

class Service(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    slug: str
    summary: str
    bullets: List[str]
    icon: str

class ServiceCreate(BaseModel):
    name: str
    slug: str
    summary: str
    bullets: List[str]
    icon: str

class QuoteItem(BaseModel):
    product_id: str
    product_name: str
    quantity: int = 1
    notes: Optional[str] = None

class QuoteRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    company: str
    rut: str
    contact_name: str
    email: EmailStr
    phone: str
    region: str
    items: List[QuoteItem]
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    status: str = "pending"

class QuoteRequestCreate(BaseModel):
    company: str
    rut: str
    contact_name: str
    email: EmailStr
    phone: str
    region: str
    items: List[QuoteItem]
    notes: Optional[str] = None

class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    company: str
    email: EmailStr
    phone: str
    region: str
    intent: str  # soporte|compra|cotizacion|partner
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactMessageCreate(BaseModel):
    name: str
    company: str
    email: EmailStr
    phone: str
    region: str
    intent: str
    message: str

class AISearchRequest(BaseModel):
    query: str

class AISearchResponse(BaseModel):
    results: List[Product]
    explanation: str

class AICompareRequest(BaseModel):
    product_ids: List[str]

class AICompareResponse(BaseModel):
    products: List[Product]
    comparison: str

class AIChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None

class AIChatResponse(BaseModel):
    response: str
    session_id: str
    suggested_products: List[Product] = []

# ============ DATA INITIALIZATION ============

async def init_data():
    """Initialize database with sample data"""
    
    # Check if data already exists
    existing_categories = await db.categories.count_documents({})
    if existing_categories > 0:
        logger.info("Data already initialized")
        return
    
    logger.info("Initializing database with sample data...")
    
    # Categories
    categories = [
        {
            "id": str(uuid.uuid4()),
            "name": "Balanzas Comerciales",
            "slug": "balanzas",
            "icon": "Scale",
            "description": "Balanzas electrónicas de alta precisión para comercio y retail",
            "order": 1
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Kioskos de Autopago",
            "slug": "kioskos",
            "icon": "Monitor",
            "description": "Soluciones de autopago para reducir tiempos y optimizar operaciones",
            "order": 2
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Terminales POS",
            "slug": "pos",
            "icon": "CreditCard",
            "description": "Puntos de venta robustos para alto tráfico",
            "order": 3
        },
        {
            "id": str(uuid.uuid4()),
            "name": "POS Móviles",
            "slug": "pos-moviles",
            "icon": "Smartphone",
            "description": "Soluciones de pago móvil para retail moderno",
            "order": 4
        }
    ]
    await db.categories.insert_many(categories)
    
    # Products
    products = [
        {
            "id": str(uuid.uuid4()),
            "name": "Balanza Electrónica BP-15",
            "slug": "balanza-bp-15",
            "category_slug": "balanzas",
            "brand": "Alcom",
            "summary": "Balanza de mostrador de alta precisión para comercio retail",
            "bullets": [
                "Capacidad 15kg con precisión de 5g",
                "Display LED doble cara para cliente y operador",
                "Conexión RS232 para integración con sistemas POS",
                "Certificación metrológica incluida"
            ],
            "specs": {
                "Capacidad máxima": "15kg",
                "Precisión": "5g",
                "Conectividad": "RS232, USB",
                "Display": "LED dual",
                "Voltaje": "110-220V"
            },
            "compatibility": ["POS Windows", "Linux POS", "Android POS"],
            "images": ["https://images.unsplash.com/photo-1612012060851-20f943c02d3d"],
            "status": "quote",
            "inventory_state": "in_stock",
            "price": None,
            "currency": "CLP",
            "vat_included": True,
            "tags": ["balanza", "retail", "comercio"],
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Kiosko Autopago K-Pro 24",
            "slug": "kiosko-k-pro-24",
            "category_slug": "kioskos",
            "brand": "Alcom",
            "summary": "Kiosko de autopago para alto tráfico con lector NFC y código QR",
            "bullets": [
                "Pantalla táctil 24\" capacitiva",
                "Lector de tarjetas NFC y código QR",
                "Impresora térmica de tickets integrada",
                "Software personalizable según necesidades"
            ],
            "specs": {
                "Pantalla": "24\" táctil capacitiva",
                "Procesador": "Intel i5",
                "RAM": "8GB",
                "Almacenamiento": "256GB SSD",
                "Conectividad": "WiFi, Ethernet, 4G (opcional)",
                "Pagos": "NFC, QR, Tarjetas chip"
            },
            "compatibility": ["Windows 10/11", "Linux", "Android"],
            "images": ["https://images.unsplash.com/photo-1613652038578-a9a988b54a60"],
            "status": "quote",
            "inventory_state": "by_order",
            "price": None,
            "currency": "CLP",
            "vat_included": True,
            "tags": ["kiosko", "autopago", "autoservicio"],
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Terminal POS-T15",
            "slug": "terminal-pos-t15",
            "category_slug": "pos",
            "brand": "Alcom",
            "summary": "Terminal punto de venta todo-en-uno para comercio",
            "bullets": [
                "Pantalla táctil 15\" resistiva",
                "Procesador quad-core, 4GB RAM",
                "Puertos para periféricos: 4x USB, 2x Serial",
                "Diseño compacto y robusto para alto uso"
            ],
            "specs": {
                "Pantalla": "15\" táctil resistiva",
                "Procesador": "ARM Quad-Core",
                "RAM": "4GB",
                "Almacenamiento": "64GB eMMC",
                "Puertos": "4x USB, 2x Serial, Ethernet, Audio",
                "SO": "Windows 10 IoT / Linux"
            },
            "compatibility": ["Impresoras térmicas", "Lectores código barras", "Cajones de dinero"],
            "images": ["https://images.unsplash.com/photo-1556742031-c6961e8560b0"],
            "status": "quote",
            "inventory_state": "in_stock",
            "price": None,
            "currency": "CLP",
            "vat_included": True,
            "tags": ["pos", "terminal", "punto de venta"],
            "created_at": datetime.now(timezone.utc).isoformat()
        },
        {
            "id": str(uuid.uuid4()),
            "name": "POS Móvil PM-100",
            "slug": "pos-movil-pm-100",
            "category_slug": "pos-moviles",
            "brand": "Alcom",
            "summary": "Terminal de pago móvil con conectividad 4G y batería de larga duración",
            "bullets": [
                "Pantalla 5.5\" táctil HD",
                "Lector chip, contactless y banda magnética",
                "Conectividad 4G/WiFi/Bluetooth",
                "Batería 8 horas de uso continuo"
            ],
            "specs": {
                "Pantalla": "5.5\" HD táctil",
                "Procesador": "Snapdragon octa-core",
                "RAM": "3GB",
                "Conectividad": "4G, WiFi, Bluetooth 5.0, NFC",
                "Batería": "5000mAh",
                "Certificaciones": "PCI-PTS 5.x"
            },
            "compatibility": ["Android apps", "iOS apps", "Webpay", "MercadoPago"],
            "images": ["https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec"],
            "status": "quote",
            "inventory_state": "in_stock",
            "price": None,
            "currency": "CLP",
            "vat_included": True,
            "tags": ["pos movil", "pago", "terminal"],
            "created_at": datetime.now(timezone.utc).isoformat()
        }
    ]
    await db.products.insert_many(products)
    
    # Services
    services = [
        {
            "id": str(uuid.uuid4()),
            "name": "Despliegue Masivo",
            "slug": "despliegue-masivo",
            "summary": "Instalación, configuración y puesta en marcha de equipos en múltiples sucursales",
            "bullets": [
                "Instalación certificada en terreno",
                "Configuración y parametrización",
                "Capacitación a usuarios finales",
                "Soporte post-implementación"
            ],
            "icon": "Truck"
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Homologación y Certificación",
            "slug": "homologacion",
            "summary": "Validación técnica y certificación de equipos según normativas locales",
            "bullets": [
                "Pruebas de integración con sistemas existentes",
                "Certificación metrológica (balanzas)",
                "Homologación de pagos (PCI-DSS)",
                "Documentación técnica completa"
            ],
            "icon": "ShieldCheck"
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Desarrollo a Medida",
            "slug": "desarrollo-medida",
            "summary": "Soluciones de software y hardware personalizadas para necesidades específicas",
            "bullets": [
                "Análisis de requerimientos",
                "Diseño de arquitectura",
                "Desarrollo e integración",
                "Mantenimiento evolutivo"
            ],
            "icon": "Code"
        },
        {
            "id": str(uuid.uuid4()),
            "name": "Soporte 24/7",
            "slug": "soporte",
            "summary": "Mesa de ayuda técnica disponible todo el año",
            "bullets": [
                "Atención telefónica y remota",
                "Diagnóstico y resolución de incidencias",
                "Reposición de equipos en garantía",
                "Gestión de RMA y repuestos"
            ],
            "icon": "Headset"
        }
    ]
    await db.services.insert_many(services)
    
    logger.info("Database initialized successfully")

# ============ ENDPOINTS ============

@api_router.get("/")
async def root():
    return {"message": "Alcom E-commerce API"}

# Categories
@api_router.get("/categories", response_model=List[Category])
async def get_categories():
    categories = await db.categories.find({}, {"_id": 0}).sort("order", 1).to_list(100)
    return categories

# Products
@api_router.get("/products", response_model=List[Product])
async def get_products(
    category: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    search: Optional[str] = Query(None)
):
    query = {}
    if category:
        query["category_slug"] = category
    if status:
        query["status"] = status
    if search:
        query["$or"] = [
            {"name": {"$regex": search, "$options": "i"}},
            {"summary": {"$regex": search, "$options": "i"}},
            {"tags": {"$regex": search, "$options": "i"}}
        ]
    
    products = await db.products.find(query, {"_id": 0}).to_list(100)
    
    # Convert ISO string timestamps back to datetime
    for product in products:
        if isinstance(product.get('created_at'), str):
            product['created_at'] = datetime.fromisoformat(product['created_at'])
    
    return products

@api_router.get("/products/{slug}", response_model=Product)
async def get_product(slug: str):
    product = await db.products.find_one({"slug": slug}, {"_id": 0})
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    if isinstance(product.get('created_at'), str):
        product['created_at'] = datetime.fromisoformat(product['created_at'])
    
    return product

# Services
@api_router.get("/services", response_model=List[Service])
async def get_services():
    services = await db.services.find({}, {"_id": 0}).to_list(100)
    return services

# Quote Requests
@api_router.post("/quote", response_model=QuoteRequest)
async def create_quote_request(quote: QuoteRequestCreate):
    quote_dict = quote.model_dump()
    quote_obj = QuoteRequest(**quote_dict)
    
    # Convert to dict and serialize datetime
    doc = quote_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.quote_requests.insert_one(doc)
    logger.info(f"Quote request created: {quote_obj.id} for {quote_obj.company}")
    
    return quote_obj

# Contact Messages
@api_router.post("/contact", response_model=ContactMessage)
async def create_contact_message(contact: ContactMessageCreate):
    contact_dict = contact.model_dump()
    contact_obj = ContactMessage(**contact_dict)
    
    # Convert to dict and serialize datetime
    doc = contact_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    
    await db.contacts.insert_one(doc)
    logger.info(f"Contact message created: {contact_obj.id} from {contact_obj.email}")
    
    return contact_obj

# AI Search
@api_router.post("/ai/search", response_model=AISearchResponse)
async def ai_search(request: AISearchRequest):
    """Semantic search using Claude Sonnet 4"""
    
    # Get all products
    all_products = await db.products.find({}, {"_id": 0}).to_list(100)
    
    # Convert ISO string timestamps
    for product in all_products:
        if isinstance(product.get('created_at'), str):
            product['created_at'] = datetime.fromisoformat(product['created_at'])
    
    # Create context for AI
    products_context = "\n\n".join([
        f"ID: {p['id']}\nNombre: {p['name']}\nCategoría: {p['category_slug']}\nResumen: {p['summary']}\nCaracterísticas: {', '.join(p['bullets'])}"
        for p in all_products
    ])
    
    # Initialize Claude chat
    llm_key = os.environ.get('EMERGENT_LLM_KEY')
    chat = LlmChat(
        api_key=llm_key,
        session_id=str(uuid.uuid4()),
        system_message=f"""Eres un asistente experto en tecnología para retail. 
Tu trabajo es ayudar a encontrar los productos más relevantes según la consulta del usuario.

Catálogo de productos:
{products_context}

Cuando el usuario haga una consulta, identifica los IDs de los productos más relevantes y explica por qué son adecuados.
Responde en formato JSON con esta estructura:
{{
    "product_ids": ["id1", "id2"],
    "explanation": "Explicación de por qué estos productos son adecuados..."
}}"""
    ).with_model("anthropic", "claude-3-7-sonnet-20250219")
    
    user_message = UserMessage(text=request.query)
    
    try:
        response = await chat.send_message(user_message)
        
        # Parse AI response
        import json
        ai_data = json.loads(response)
        
        # Filter products by AI-selected IDs
        selected_products = [p for p in all_products if p['id'] in ai_data.get('product_ids', [])]
        
        return AISearchResponse(
            results=selected_products,
            explanation=ai_data.get('explanation', '')
        )
    except Exception as e:
        logger.error(f"AI search error: {str(e)}")
        # Fallback: simple text search
        filtered = [p for p in all_products if request.query.lower() in p['name'].lower() or request.query.lower() in p['summary'].lower()]
        return AISearchResponse(
            results=filtered[:3],
            explanation=f"Resultados que coinciden con '{request.query}'"
        )

# AI Compare
@api_router.post("/ai/compare", response_model=AICompareResponse)
async def ai_compare(request: AICompareRequest):
    """Compare products using Claude Sonnet 4"""
    
    if len(request.product_ids) < 2 or len(request.product_ids) > 3:
        raise HTTPException(status_code=400, detail="Debe comparar entre 2 y 3 productos")
    
    # Get products
    products = []
    for pid in request.product_ids:
        product = await db.products.find_one({"id": pid}, {"_id": 0})
        if product:
            if isinstance(product.get('created_at'), str):
                product['created_at'] = datetime.fromisoformat(product['created_at'])
            products.append(product)
    
    if len(products) < 2:
        raise HTTPException(status_code=404, detail="No se encontraron suficientes productos")
    
    # Create comparison context
    products_details = "\n\n".join([
        f"Producto {i+1}: {p['name']}\nResumen: {p['summary']}\nCaracterísticas:\n" + "\n".join([f"- {b}" for b in p['bullets']]) + f"\nEspecificaciones: {p['specs']}"
        for i, p in enumerate(products)
    ])
    
    # Initialize Claude chat
    llm_key = os.environ.get('EMERGENT_LLM_KEY')
    chat = LlmChat(
        api_key=llm_key,
        session_id=str(uuid.uuid4()),
        system_message="""Eres un experto en tecnología para retail. Compara productos de forma objetiva, destacando diferencias clave, ventajas y casos de uso ideales para cada uno. Sé conciso (150 palabras máximo)."""
    ).with_model("anthropic", "claude-3-7-sonnet-20250219")
    
    user_message = UserMessage(text=f"Compara estos productos:\n\n{products_details}")
    
    try:
        response = await chat.send_message(user_message)
        
        return AICompareResponse(
            products=products,
            comparison=response
        )
    except Exception as e:
        logger.error(f"AI compare error: {str(e)}")
        return AICompareResponse(
            products=products,
            comparison="Comparación no disponible temporalmente. Revise las especificaciones de cada producto."
        )

# AI Chat
@api_router.post("/ai/chat", response_model=AIChatResponse)
async def ai_chat(request: AIChatRequest):
    """Chat with AI assistant"""
    
    session_id = request.session_id or str(uuid.uuid4())
    
    # Get products for context
    all_products = await db.products.find({}, {"_id": 0}).to_list(100)
    for product in all_products:
        if isinstance(product.get('created_at'), str):
            product['created_at'] = datetime.fromisoformat(product['created_at'])
    
    products_context = "\n".join([
        f"- {p['name']} ({p['category_slug']}): {p['summary']}"
        for p in all_products
    ])
    
    # Initialize Claude chat
    llm_key = os.environ.get('EMERGENT_LLM_KEY')
    chat = LlmChat(
        api_key=llm_key,
        session_id=session_id,
        system_message=f"""Eres un asistente de ventas experto en soluciones de tecnología para retail (POS, kioskos, balanzas, terminales).

Catálogo disponible:
{products_context}

Ayuda al cliente a encontrar la mejor solución según sus necesidades. Sé amable, profesional y conciso. Si el cliente muestra interés en un producto, sugiere que solicite una cotización por WhatsApp."""
    ).with_model("anthropic", "claude-3-7-sonnet-20250219")
    
    user_message = UserMessage(text=request.message)
    
    try:
        response = await chat.send_message(user_message)
        
        # Extract potential product recommendations
        suggested = []
        for product in all_products:
            if product['name'].lower() in response.lower() or product['category_slug'].lower() in request.message.lower():
                suggested.append(product)
        
        return AIChatResponse(
            response=response,
            session_id=session_id,
            suggested_products=suggested[:2]
        )
    except Exception as e:
        logger.error(f"AI chat error: {str(e)}")
        return AIChatResponse(
            response="Lo siento, estoy teniendo problemas técnicos. Por favor, contacta con nuestro equipo por WhatsApp.",
            session_id=session_id,
            suggested_products=[]
        )

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    await init_data()

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
