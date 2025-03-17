<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">About Page</h2>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Learn about our analytics demo</p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
      <p class="text-gray-700 mb-4">This demo shows how to track page views and events with GTM and GA4.</p>
      <button 
        @click="trackButtonClick('about-learn-more')" 
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup>
const trackButtonClick = (buttonId) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'button_click',
      button_id: buttonId
    });
  }
  
  console.log(`Button clicked: ${buttonId}`);
}
</script>