<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="account">Account</label>
        <input
          id="account"
          v-model="account"
          name="account"
          type="text"
          class="form-control"
          placeholder="account"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="password"
          autocomplete="current-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <router-link to="/signup"> Sign Up </router-link>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2023-2024</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      authorizationAPI
        .signIn({
          account: this.account,
          password: this.password,
        })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("token", data.token);
          this.$router.push("/attendance");
        });
    },
  },
};
</script>
