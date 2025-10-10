import React, { useEffect, useRef, useState } from 'react';

const KPIVertical = () => {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            animateAllCards();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [animated]);

  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  const formatNumberES = (value, decimals) => {
    return value.toLocaleString('es-ES', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  const animateValue = (el, target, decimals, suffix, duration) => {
    let start = null;
    const from = 0;

    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = easeOutCubic(p);
      const current = from + (target - from) * eased;
      el.textContent = formatNumberES(current, decimals) + (suffix || '');
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const animateAllCards = () => {
    const cards = sectionRef.current?.querySelectorAll('.kpi-card-vertical');
    cards?.forEach((card) => {
      const valueEl = card.querySelector('.kpi-value-vertical');
      const fillEl = card.querySelector('.kpi-fill-vertical');
      const progress = parseFloat(card.dataset.progress || '0');

      if (valueEl) {
        const target = parseFloat(valueEl.dataset.target || '0');
        const decimals = parseInt(valueEl.dataset.decimals || '0', 10);
        const suffix = valueEl.dataset.suffix || '';
        const duration = parseInt(valueEl.dataset.duration || '1400', 10);
        animateValue(valueEl, target, decimals, suffix, duration);
      }

      if (fillEl) {
        fillEl.style.width = '0%';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            fillEl.style.width = Math.min(100, Math.max(0, progress)) + '%';
          });
        });
      }
    });
  };

  const kpis = [
    {
      label: 'Transacciones anuales',
      target: 1,
      decimals: 0,
      suffix: 'B',
      progress: 76,
      ariaLabel: 'Transacciones anuales'
    },
    {
      label: 'ATMs activos',
      target: 99.4,
      decimals: 1,
      suffix: '%',
      progress: 99.4,
      ariaLabel: 'ATMs activos'
    },
    {
      label: 'Llamadas de servicio / año',
      target: 16,
      decimals: 0,
      suffix: 'M',
      progress: 82,
      ariaLabel: 'Llamadas de servicio al año'
    },
    {
      label: 'Países con cobertura',
      target: 60,
      decimals: 0,
      suffix: '',
      progress: 60,
      ariaLabel: 'Países con cobertura'
    }
  ];

  return (
    <>
      <style>
        {`
          .kpi-vertical-section {
            box-sizing: border-box;
            width: 100%;
            max-width: 680px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 12px;
            background: transparent;
          }

          .kpi-card-vertical {
            background: radial-gradient(1200px 500px at 120% -40%, rgba(34,197,94,.10), transparent 60%),
                        radial-gradient(900px 400px at -30% 120%, rgba(45,212,191,.10), transparent 60%),
                        #11161b;
            border: 1px solid #1c242c;
            border-radius: 14px;
            box-shadow: 0 6px 20px rgba(0,0,0,.28);
            padding: 16px;
            position: relative;
            isolation: isolate;
            overflow: hidden;
          }

          .kpi-card-vertical::after {
            content: "";
            position: absolute;
            inset: -1px;
            border-radius: inherit;
            background: linear-gradient(to bottom right,
              rgba(45,212,191,.06), transparent 40%,
              rgba(34,197,94,.06) 70%, transparent 100%);
            pointer-events: none;
            mask: linear-gradient(black, transparent 60%);
          }

          .kpi-top-vertical {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 10px;
          }

          .kpi-label-vertical {
            margin: 0;
            font-size: 0.95rem;
            line-height: 1.2;
            color: #9aa7b1;
            font-weight: 500;
            letter-spacing: 0.2px;
          }

          .kpi-value-vertical {
            font-variant-numeric: tabular-nums;
            font-size: 1.8rem;
            font-weight: 700;
            letter-spacing: 0.2px;
            text-shadow: 0 1px 0 rgba(0,0,0,.25);
            color: #e7ecf0;
          }

          .kpi-bar-vertical {
            position: relative;
            height: 10px;
            background: linear-gradient(180deg, #0c1217, #0a1014);
            border: 1px solid #1c242c;
            border-radius: 999px;
            overflow: hidden;
            box-shadow: inset 0 1px 0 rgba(255,255,255,.03);
          }

          .kpi-fill-vertical {
            display: block;
            height: 100%;
            width: 0%;
            border-radius: inherit;
            background: linear-gradient(90deg, #22c55e, #2dd4bf),
                        repeating-linear-gradient(90deg, rgba(255,255,255,.15) 0 8px, transparent 8px 16px);
            box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset,
                        0 6px 14px rgba(34,197,94,.25);
            transition: width 1100ms cubic-bezier(.22,.9,.27,1);
          }

          .kpi-card-vertical:focus-within,
          .kpi-card-vertical:hover {
            outline: none;
            box-shadow: 0 0 0 2px rgba(45,212,191,.25), 0 6px 20px rgba(0,0,0,.28);
          }

          @media (prefers-reduced-motion: reduce) {
            .kpi-fill-vertical {
              transition: none;
            }
          }
        `}
      </style>

      <section
        ref={sectionRef}
        className="kpi-vertical-section"
        aria-label="Indicadores de rendimiento"
        data-testid="kpi-vertical-section"
      >
        {kpis.map((kpi, index) => (
          <article
            key={index}
            className="kpi-card-vertical"
            data-progress={kpi.progress}
          >
            <header className="kpi-top-vertical">
              <h3 className="kpi-label-vertical">{kpi.label}</h3>
              <div
                className="kpi-value-vertical"
                data-target={kpi.target}
                data-decimals={kpi.decimals}
                data-suffix={kpi.suffix}
                data-duration="1400"
                aria-label={kpi.ariaLabel}
              >
                0
              </div>
            </header>
            <div
              className="kpi-bar-vertical"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="0"
              aria-label={`Progreso ${kpi.label}`}
            >
              <span className="kpi-fill-vertical"></span>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default KPIVertical;
