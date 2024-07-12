<template>
    <div id="app">
      <!-- Header -->
      <header class="bg-white shadow-md">
        <div class="container mx-auto px-6 py-2 flex items-center justify-between">
          <div class="text-lg font-semibold text-gray-800 flex items-center">
            <img src="@/assets/DS_logo_1.png" alt="Logo" class="w-6 h-6 mr-2" />
            <span>Designers Support</span>
          </div>
          <nav class="flex space-x-4">
            <router-link to="/" class="text-gray-600 hover:text-gray-800 transition duration-300">Home</router-link>
          </nav>
          <a
            href="#contact"
            class="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Contact Us →
          </a>
        </div>
      </header>
  
      <!-- Main Content -->
      <main class="flex-1">
        <!-- Contact Section -->
        <section class="contact-section py-16">
          <div class="container mx-auto px-6">
            <h1 class="text-4xl font-thin text-gray-800 mb-4">Contact Us</h1>
            <p class="text-lg text-gray-600 mb-8">We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your email">
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your message"></textarea>
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Send</button>
              </div>
            </form>
          </div>
        </section>
      </main>
  
      <!-- Footer -->
      <footer class="footer py-4">
        <div class="container mx-auto text-center text-gray-600">
          © 2024 Designers Support. All rights reserved.
        </div>
      </footer>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'ContactPage',
  });
  </script>
  
  <style scoped>
  /* Additional scoped styles if needed */
  </style>
  