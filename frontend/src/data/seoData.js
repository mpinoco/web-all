// SEO Data centralizado para todas las páginas de ALLCOM
// Optimizado para búsquedas en Google y ChatGPT 2025

export const seoData = {
  home: {
    title: 'ALLCOM | Tecnología para Tiendas Sin Enredos - Kioskos, POS y Soluciones Retail Chile',
    description: 'Líder en soluciones tecnológicas para retail en Chile. Kioskos de autopago, terminales POS, balanzas inteligentes, cartelería digital y más. +17 años de experiencia, soporte 24/7 y cobertura nacional.',
    keywords: 'tecnología retail Chile, kioskos autopago, terminales POS, punto de venta, balanzas comerciales, cartelería digital, hardware retail, software POS Chile, ALLCOM, soluciones retail Santiago',
    canonicalUrl: '/',
    hashtags: ['#RetailTech', '#KioscosPOS', '#TecnologíaRetail', '#AllcomChile', '#InnovaciónRetail', '#PuntoDeVentaDigital'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ALLCOM',
      url: 'https://allcom.cl',
      logo: 'https://allcom.cl/logo-allcom.png',
      description: 'Soluciones tecnológicas integrales para retail en Chile',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL',
        addressLocality: 'Santiago'
      },
      areaServed: 'CL',
      sameAs: [
        'https://www.linkedin.com/company/allcom',
        'https://www.instagram.com/allcom_chile'
      ]
    }
  },
  
  products: {
    title: 'Productos para Retail - Kioskos, POS, Balanzas y Cartelería Digital',
    description: 'Catálogo completo de productos para retail: Kioskos de autopago IMIN, Terminales POS Wintec, Balanzas Marques, Pantallas digitales SOLUM. Equipamiento profesional con garantía y soporte 24/7 en Chile.',
    keywords: 'productos retail Chile, kioskos IMIN, POS Wintec, balanzas Marques, pantallas SOLUM, equipamiento retail, hardware comercial, catálogo retail tech',
    canonicalUrl: '/productos',
    hashtags: ['#ProductosRetail', '#KioscosIMIN', '#POSWintec', '#BalanzasMarques', '#HardwareRetail', '#EquipamientoComercial'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Productos ALLCOM para Retail',
      description: 'Catálogo completo de soluciones de hardware para retail'
    }
  },
  
  services: {
    title: 'Servicios Integrales para Retail - Instalación, Soporte y Desarrollo',
    description: 'Servicios end-to-end para retail: Instalación profesional, desarrollo de software personalizado, mantenimiento preventivo, soporte técnico 24/7 y capacitación. Cobertura nacional en Chile.',
    keywords: 'servicios retail Chile, instalación POS, soporte técnico retail, desarrollo software comercial, mantenimiento equipos retail, capacitación sistemas POS, servicios ALLCOM',
    canonicalUrl: '/servicios',
    hashtags: ['#ServiciosRetail', '#SoporteTécnico', '#InstalaciónProfesional', '#DesarrolloRetail', '#Mantenimiento24/7'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Servicios ALLCOM para Retail',
      provider: {
        '@type': 'Organization',
        name: 'ALLCOM'
      },
      areaServed: 'Chile'
    }
  },
  
  contact: {
    title: 'Contacto ALLCOM - Cotiza Tu Proyecto de Retail Tech',
    description: 'Contáctanos para cotizar tu proyecto de tecnología retail. Atención personalizada, respuesta en 24h. WhatsApp, email y teléfono. Oficinas en Santiago, cobertura nacional Chile.',
    keywords: 'contacto ALLCOM, cotización retail Chile, WhatsApp ALLCOM, asesoría retail tech, contacto POS kioskos, cotizar proyecto retail',
    canonicalUrl: '/contacto',
    hashtags: ['#ContactoALLCOM', '#CotizaciónRetail', '#AsesoríaTech', '#SoporteChile'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contacto ALLCOM'
    }
  },
  
  alianzaIMIN: {
    title: 'ALLCOM + IMIN | Kioskos Inteligentes y POS Android para Retail Chile',
    description: 'Alianza exclusiva ALLCOM-IMIN: Kioskos de autopago, POS Android, KDS y PDAs para retail y restaurantes. Compatible con Justo, Toteat, FUDO. Pantallas táctiles, impresoras integradas y Android 11.',
    keywords: 'IMIN Chile, kioskos IMIN, POS Android IMIN, kiosco autopago, terminal punto venta Android, IMIN Crane 1, IMIN D4, restaurantes delivery Chile',
    canonicalUrl: '/alianza-imin',
    hashtags: ['#IMINChile', '#KioscosInteligentes', '#POSAndroid', '#AllcomIMIN', '#AutopagoRetail', '#DeliveryTech'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Kioskos y POS IMIN',
      brand: {
        '@type': 'Brand',
        name: 'IMIN'
      },
      manufacturer: {
        '@type': 'Organization',
        name: 'ALLCOM'
      }
    }
  },
  
  alianzaWintec: {
    title: 'ALLCOM + Wintec | Terminales POS y Displays Profesionales Chile',
    description: 'Alianza ALLCOM-Wintec: Terminales POS AnyPOS, displays tipo barra, etiquetas electrónicas ESL y señalización digital. Soluciones completas para retail moderno en Chile.',
    keywords: 'Wintec Chile, POS Wintec, AnyPOS, ESL etiquetas electrónicas, displays barra, terminales POS profesionales, retail moderno Chile',
    canonicalUrl: '/alianza-wintec',
    hashtags: ['#WintecChile', '#AnyPOS', '#ESLChile', '#TerminalesPOS', '#RetailModerno', '#DisplaysProfesionales'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Terminales POS Wintec',
      brand: {
        '@type': 'Brand',
        name: 'Wintec'
      }
    }
  },
  
  alianzaMarques: {
    title: 'ALLCOM + Balanças Marques | Balanzas Comerciales e Industriales Chile',
    description: 'Alianza ALLCOM-Balanças Marques: Balanzas comerciales para retail, balanzas industriales de precisión y software de pesaje. Calidad brasileña, soporte nacional en Chile.',
    keywords: 'Balanças Marques Chile, balanzas comerciales, balanzas retail, balanzas industriales, software pesaje, balanzas precio computadoras Chile',
    canonicalUrl: '/alianza-marques',
    hashtags: ['#BalanzasMarques', '#BalanzasComerciales', '#PesajeIndustrial', '#RetailWeighing', '#MarquesChile'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Balanzas Marques',
      brand: {
        '@type': 'Brand',
        name: 'Balanças Marques'
      }
    }
  },
  
  inteligenciaArtificial: {
    title: 'Inteligencia Artificial para Retail - Agentes IA y LLM ALLCOM',
    description: 'Soluciones de IA para retail: Agentes conversacionales, análisis predictivo, chatbots inteligentes y dashboards con IA. Partnerships con Emergent, Google y ChatGPT. Automatiza tu retail con IA.',
    keywords: 'inteligencia artificial retail Chile, IA retail, chatbots retail, agentes IA comercio, LLM retail, automatización IA tiendas, AI retail tech',
    canonicalUrl: '/inteligencia-artificial',
    hashtags: ['#IARetail', '#RetailAI', '#ChatbotsComercio', '#AutomatizaciónIA', '#LLMChile', '#TechInnovation'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Soluciones de IA para Retail',
      provider: {
        '@type': 'Organization',
        name: 'ALLCOM'
      }
    }
  },
  
  team: {
    title: 'Equipo ALLCOM - Líderes en Tecnología Retail Chile',
    description: 'Conoce al equipo ALLCOM: Ingenieros, developers y especialistas en retail tech con +17 años de experiencia. Liderazgo en innovación, valores corporativos y visión de futuro.',
    keywords: 'equipo ALLCOM, team retail tech, ingenieros retail Chile, líderes tecnología comercial, empresa tecnología Santiago',
    canonicalUrl: '/team',
    hashtags: ['#TeamALLCOM', '#LiderazgoTech', '#IngenierosRetail', '#CulturaEmpresarial', '#InnovaciónChile'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'Equipo ALLCOM'
    }
  },
  
  eventosKioskos: {
    title: 'Arriendo Kioskos para Eventos - Festivales y Conferencias Chile',
    description: 'Arriendo de kioskos de autopago para eventos, festivales y conferencias en Chile. Solución plug & play, soporte on-site, procesamiento de pagos integrado. Disponible para eventos temporales.',
    keywords: 'arriendo kioskos eventos Chile, kioskos festivales, arriendo POS eventos, kioskos temporales, eventos comerciales Chile, kioskos conferencias',
    canonicalUrl: '/eventos-kioskos',
    hashtags: ['#KioscosEventos', '#FestivalesChile', '#ArriendoPOS', '#EventosCorporativos', '#SolucionesTemporales'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Arriendo Kioskos Eventos',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock'
      }
    }
  },
  
  aeropuertoCharger: {
    title: 'Cargadores Inteligentes para Aeropuertos - Estaciones de Carga Chile',
    description: 'Estaciones de carga inteligentes para aeropuertos: Múltiples puertos USB/USB-C, pantallas publicitarias integradas, monetización por publicidad. Solución para terminales aéreos en Chile.',
    keywords: 'cargadores aeropuerto Chile, estaciones carga inteligentes, charging stations, cargadores USB aeropuertos, publicidad aeropuertos Chile',
    canonicalUrl: '/aeropuerto-charger',
    hashtags: ['#CargadoresAeropuerto', '#ChargingStations', '#AeropuertosChile', '#PublicidadDigital', '#SmartCharging'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'Estaciones de Carga Aeropuertos'
    }
  },
  
  alianzaJusto: {
    title: 'ALLCOM + JUSTO | Software POS para Restaurantes Chile',
    description: 'Software POS JUSTO para restaurantes: Gestión de mesas, pedidos online, delivery integrado, inventario en tiempo real. Solución todo-en-uno para restaurantes modernos en Chile.',
    keywords: 'JUSTO POS Chile, software restaurantes, POS delivery, gestión restaurantes, pedidos online Chile, software gastronómico JUSTO',
    canonicalUrl: '/alianza-justo',
    hashtags: ['#JUSTOChile', '#POSRestaurantes', '#DeliveryIntegrado', '#GestiónGastronómica', '#SoftwareRestaurantes'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'JUSTO POS',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud'
    }
  }
};

export default seoData;
