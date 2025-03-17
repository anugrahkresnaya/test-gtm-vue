<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h2 class="text-lg leading-6 font-medium text-gray-900">Contact Page</h2>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Get in touch with us</p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-6">
      <form @submit.prevent="submitForm">
        <div class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div class="sm:col-span-2">
            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
            <div class="mt-1">
              <input 
                type="text" 
                name="name" 
                id="name" 
                v-model="form.name"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
            <div class="mt-1">
              <input 
                type="email" 
                name="email" 
                id="email" 
                v-model="form.email"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
            <div class="mt-1">
              <textarea 
                id="message" 
                name="message" 
                rows="4" 
                v-model="form.message"
                class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div class="sm:col-span-2">
            <button 
              type="submit" 
              class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  // Track form submission
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submit',
      form_id: 'contact_form',
      form_name: 'Contact Form'
    });
  }
  
  console.log('Form submitted:', form);
  
  // Reset form
  form.name = '';
  form.email = '';
  form.message = '';
  
  alert('Form submitted successfully!');
}
</script>