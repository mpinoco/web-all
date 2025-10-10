import React, { useEffect, useRef, useState } from 'react';

const KPISection = ({ variant = 'main' }) => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // KPI Data
  const mainKPIs = [
    { number: 5000, suffix: '+', label: 'dispositivos', duration: 1200 },
    { number: 400, suffix: '+', label: 'locales', duration: 1200 },
    { number: 250, suffix: '+', label: 'proyectos completados', duration: 1200 },
    { number: 30, suffix: '+', label: 'colaboradores', duration: 1200 },
    { number: 20, suffix: ' millones', label: 'de interacciones al mes', duration: 1200 },
    { number: 17, suffix: ' años', label: 'de experiencia', duration: 1200 }
  ];

  const compactKPIs = [
    { number: 17, suffix: ' años', label: 'dando soluciones al Retail', duration: 1200 },
    { number: 20, suffix: ' millones', label: 'de transacciones al mes', duration: 1200 }
  ];

  const kpis = variant === 'compact' ? compactKPIs : mainKPIs;

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll('[data-kpi-item]');
    if (!items || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Trigger animations with stagger
            items.forEach((item, index) => {
              setTimeout(() => {
                animateCounter(item);
              }, index * 80);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = (item) => {
    const target = parseFloat(item.dataset.target);
    const suffix = item.dataset.suffix || '';
    const duration = parseInt(item.dataset.duration || 1200, 10);
    const numberEl = item.querySelector('[data-number]');
    const useSeparator = item.dataset.separator === 'true';

    if (!numberEl) return;

    const startTime = performance.now();

    const format = (n) => {
      if (useSeparator) {
        return Math.floor(n).toLocaleString('es-CL');
      }
      return Math.floor(n).toString();
    };

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = eased * target;

      numberEl.textContent = format(value) + suffix;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        numberEl.textContent = format(target) + suffix;
      }
    };

    requestAnimationFrame(step);
  };

  const bgColor = variant === 'main' ? 'bg-[#2a374a]' : 'bg-transparent';
  const textColor = variant === 'main' ? 'text-white' : 'text-[#2a374a]';
  const labelOpacity = variant === 'main' ? 'opacity-80' : 'opacity-70';
  const gridCols = variant === 'main' 
    ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' 
    : 'grid-cols-1 md:grid-cols-2';
  const padding = variant === 'main' ? 'py-16 md:py-20 lg:py-24' : 'py-8 md:py-12';

  return (
    <section
      ref={sectionRef}
      className={`${bgColor} ${padding}`}
      data-testid={`kpi-section-${variant}`}
    >
      <div className="container mx-auto px-4">
        <div className={`grid ${gridCols} gap-8 md:gap-12`}>
          {kpis.map((kpi, index) => (
            <article
              key={index}
              data-kpi-item
              data-target={kpi.number}
              data-suffix={kpi.suffix}
              data-duration={kpi.duration}
              data-separator="true"
              aria-label={`${kpi.number}${kpi.suffix} ${kpi.label}`}
              className="text-center transform transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${index * 80}ms`
              }}
            >
              <div
                data-number
                className={`${textColor} font-bold text-4xl md:text-5xl lg:text-6xl mb-2 tracking-tight`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                0{kpi.suffix}
              </div>
              <div
                className={`${textColor} ${labelOpacity} text-sm md:text-base lg:text-lg tracking-wide lowercase`}
                style={{ fontFamily: 'Open Sans, sans-serif' }}
              >
                {kpi.label}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPISection;