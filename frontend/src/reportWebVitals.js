// Web Vitals Configuration for ALLCOM
// This file tracks Core Web Vitals for SEO optimization

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

// Performance optimization tips implemented:
// 1. Image lazy loading (React default)
// 2. Code splitting by routes
// 3. Font preloading in index.html
// 4. DNS prefetch for external resources
// 5. Preload critical images (hero backgrounds)
// 6. React.memo for heavy components
// 7. Debounced inputs in ROI calculator

// Target Core Web Vitals (Green):
// - LCP (Largest Contentful Paint): < 2.5s
// - FID (First Input Delay): < 100ms
// - CLS (Cumulative Layout Shift): < 0.1
