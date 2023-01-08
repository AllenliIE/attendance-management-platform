<template>
  <div id="attendance-management-platform">
    <Navbar />
    <main
      role="main"
      class="mt-5 bg-white"
    >
      <router-view />
    </main>
  </div>
</template>

<script>
  import 'bootstrap' //default dist/js/bootstrap
  import 'bootstrap/dist/css/bootstrap.min.css'
  import Navbar from './components/Navbar'

  export default {
    name: 'App',
    components: {
     Navbar
   }
  }
</script>