<template>
  <div>
    <Header />
    <div class="page-404">
      <div class="container">
        <img src="@/assets/img/404.svg" alt="">
        <router-link class="btn-main-outline" :to="{ name: 'Home' }">go to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'NotFound',
  components: {
    Header,
  },
};
</script>
