<template>
  <aside class="col-2 text-center" style="background-color: #14597f">
    <ul class="nav nav-tabs">
      <li v-for="tab in tabs" :key="tab.id" class="nav-item col m-4">
        <router-link :to="tab.path" class="nav-link row text-white">
          <p class="fs-4">{{ tab.title }}</p>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: "Profile",
          path: "/attendance/profile",
        },
        {
          id: uuidv4(),
          title: "Reader",
          path: "/attendance/reader",
        },
        {
          id: uuidv4(),
          title: "CheckIn",
          path: "/attendance/checkin",
        },
      ],
    };
  },
};
</script>
