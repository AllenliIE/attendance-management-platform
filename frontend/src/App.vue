<template>
  <div id="attendance-management-platform">
    <NavBar />
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
  import NavBar from './components/NavBar'

  export default {
    name: 'App',
    components: {
     NavBar
   }
  }
</script>