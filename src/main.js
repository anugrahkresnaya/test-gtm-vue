import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GTM from './plugins/gtm'

// Create Vue app
const app = createApp(App)

// Use router
app.use(router)

// Use GTM plugin
app.use(GTM, {
  id: 'GTM-5MMCLKXM', // Replace with your GTM container ID
  debug: true, // Set to false in production
})

// Track page views when route changes
router.afterEach((to) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: to.fullPath,
      page_title: document.title,
      page_location: window.location.href
    });
  }
});

// Mount app
app.mount('#app')