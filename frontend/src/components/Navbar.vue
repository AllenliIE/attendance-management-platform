<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
    <router-link 
      class="navbar-brand m-3" 
      to="/"
    >
      Attendance Management System
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div 
      id="navbarSupportedContent" 
      class="navbar-collapse collapse d-flex justify-content-end" 
    >
      <div 
        class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link 
          v-if="currentUser.isAdmin"
          to="#" 
          class="text-primary m-3 text-decoration-none"
        >
          Admin Platform
        </router-link>

        <!-- is user is login -->
        <template v-if="isAuthenticated">
          <router-link 
            to="#" 
            class="text-primary m-3 text-decoration-none"
          >
            Hello, {{ currentUser.name || 'User' }}
          </router-link>
          <button 
            type="button" 
            class="btn btn-sm btn-outline-primary m-3 my-sm-0"
          >
            Logout
          </button>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: 'titaner',
    email: 'titaner@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}
export default {
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      }
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  }
}
</script>