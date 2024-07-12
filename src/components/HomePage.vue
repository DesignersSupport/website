<template>
  <div>
    <!-- Header -->
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-6 py-2 flex items-center justify-between">
        <div class="text-lg font-semibold text-gray-800 flex items-center">
          <img src="@/assets/DS_logo_1.png" alt="Logo" class="w-6 h-6 mr-2" />
          <span>Designers Support</span>
        </div>
        <nav class="flex space-x-4">
          <a href="#branches" class="text-gray-600 hover:text-gray-800 transition duration-300">Branches</a>
          <router-link to="/contact" class="text-gray-600 hover:text-gray-800 transition duration-300">Contact</router-link>
          <a
            href="https://discord.com/invite/designers-support"
            class="text-gray-600 hover:text-gray-800 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us
          </a>
        </nav>
        <a
          href="contact"
          class="bg-blue-500 text-white px-3 py-1 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Contact Us →
        </a>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section flex items-center justify-between text-center px-6 py-16">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div class="text-content text-left md:pr-8 md:w-1/2">
          <h1 class="text-4xl font-thin text-gray-800 mb-4">A platform for development projects.</h1>
          <p class="text-lg text-gray-600 mb-4">We are Designers Support. We develop and design.</p>
          <a href="#branches" class="custom-button">Read more about us →</a>
        </div>
        <div class="logo-content mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img src="@/assets/DS_logo_1.png" alt="Logo" class="w-32 h-32 mx-auto" />
        </div>
      </div>
    </section>

    <!-- Branches Section -->
    <section id="branches" class="branches-section py-16">
      <div class="container mx-auto px-6">
        <div class="branches-card shadow-lg flex mb-8 rounded-lg p-6 bg-card1">
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2 text-left">Pasma Graphics</h3>
            <p class="text-gray-600 mb-4 text-left">
              Pasma is a cosmic-world for providing Designing services in Discord,
              Also With high-quality & full-speed.
            </p>
            <div class="flex space-x-4 mb-4">
              <div>
                <strong class="text-gray-500">Users</strong><br />
                <span class="text-gray-800">2500+</span>
              </div>
              <div>
                <strong class="text-gray-500">Founded On</strong><br />
                <span class="text-gray-800">Sep 15, 2020</span>
              </div>
            </div>
            <div class="text-left">
              <a
                href="https://discord.com/invite/pasma"
                class="custom-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join now →
              </a>
            </div>
          </div>
          <img
            src="@/assets/Banner_Ar.png"
            alt="Pasma"
            class="w-64 h-40 rounded-lg shadow-lg"
          />
        </div>

        <!-- New Branch Card: Discord Lab -->
        <div class="branches-card shadow-lg flex mb-8 rounded-lg p-6 bg-card2">
          <div class="flex-1">
            <h3 class="text-2xl font-semibold text-gray-800 mb-2 text-left">Discord Lab</h3>
            <p class="text-gray-600 mb-4 text-left">
              This is your unofficial hub for discussing various aspects of programming,
              including bot development, API integration, and more.
            </p>
            <div class="text-left">
              <button
                class="custom-button disabled:opacity-50"
                disabled
              >
                Coming soon →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

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
  name: 'HomePage',
});
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #ffffff;
  color: #333333;
  margin: 0;
  padding: 0;
}
.custom-button {
  background-color: #416683;
  color: white;
  padding: 0.30rem 1.100rem; 
  border-radius: 9999px;
  text-decoration: none;
  display: inline-block;
  font-size: 0.875rem;
  transition: background-color 0.3s;
}

.custom-button:hover:not(:disabled) {
  background-color: #2d3748;
}

.custom-button:disabled {
  cursor: not-allowed;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}
header {
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header .logo {
  display: flex;
  align-items: center;
}
header .logo img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
header nav a {
  color: #333333;
  text-decoration: none;
  margin-right: 10px;
  transition: color 0.3s;
}
header nav a:hover {
  color: #416683;
}
header .contact-button {
  background-color: #416683;
  color: white;
  padding: 5px 10px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s;
}
header .contact-button:hover {
  background-color: #2d3748;
}
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  padding: 60px 0;
}
.hero-section .text-content {
  max-width: 40%;
  margin-left: 20px;
  margin-top: 30px; 
}
.hero-section .text-content h1 {
  font-size: 3rem;
  font-weight: 300;
  margin-left: 50px;
  margin-bottom: 20px;
}
.hero-section .text-content p {
  font-size: 1.2rem;
  margin-left: 50px;
  margin-bottom: 20px;
}
.hero-section .text-content a {
  background-color: #416683;
  color: white;
  padding: 10px 20px;
  margin-left: 50px;
  border-radius: 50px;
  text-decoration: none;
  transition: background-color 0.3s;
}
.hero-section .text-content a:hover {
  background-color: #2d3748;
}
.hero-section .logo-content img {
  width: 200px; /* Adjust the value as needed */
  height: auto;
  margin-left: 300px; /* Adjust the value as needed */
}
.branches-section {
  padding-top: 50px;
}
.branches-card.bg-card1 {
  background-color: #e3e8ed;
}

.branches-card.bg-card2 {
  background-color: #eae3ed;
}

.branches-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
.footer {
  background-color: #e2e8f0;
  color: #333333;
  text-align: center;
  padding: 20px 0;
}
</style>
