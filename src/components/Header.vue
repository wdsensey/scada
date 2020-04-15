<template>
    <div class="header">
      <div class="container">
        <img src="@/assets/img/logo.svg" alt="">
        <div class="header-right">
          <router-link exact :to="{ name: 'Home' }" class="header-link" active-class="active">
            home
          </router-link>
          <router-link :to="{ name: 'AddPost' }" class="header-link" active-class="active">
            new post
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>
