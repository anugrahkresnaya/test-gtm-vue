// Google Tag Manager Plugin
export default {
  install(app, options) {
    const { id, debug = false } = options;
    
    if (!id) {
      console.error('GTM ID is required');
      return;
    }
    
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // GTM snippet
    const injectGTM = () => {
      if (document.getElementById('gtm-script')) {
        return;
      }
      
      const script = document.createElement('script');
      script.id = 'gtm-script';
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${id}`;
      
      document.head.appendChild(script);
      
      // Add GTM noscript iframe for browsers with JavaScript disabled
      const noscript = document.createElement('noscript');
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.googletagmanager.com/ns.html?id=${id}`;
      iframe.height = '0';
      iframe.width = '0';
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      
      noscript.appendChild(iframe);
      document.body.insertBefore(noscript, document.body.firstChild);
      
      if (debug) {
        console.log(`GTM initialized with ID: ${id}`);
      }
    };
    
    // Push initial dataLayer
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    
    // Inject GTM script
    if (typeof window !== 'undefined') {
      injectGTM();
    }
    
    // Expose GTM to the Vue instance
    app.config.globalProperties.$gtm = {
      push: (...args) => {
        if (window.dataLayer) {
          window.dataLayer.push(...args);
          if (debug) {
            console.log('GTM dataLayer push:', ...args);
          }
        }
      }
    };
  }
};