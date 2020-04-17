<template>
    <div class="header">
      <div class="container">
        <img class="logo" src="@/assets/img/logo.svg" alt="">
        <div class="header-right">
          <router-link exact :to="{ name: 'Home' }" class="header-link" active-class="active">
            home
          </router-link>
          <router-link :to="{ name: 'AddPost' }" class="header-link" active-class="active">
            new post
          </router-link>
        </div>
        <div class="mobile-menu" :class="{ open: isOpenMobileMenu }">
          <router-link exact :to="{ name: 'Home' }" class="header-link" active-class="active">
            <div class="" @click="isOpenMobileMenu = false">home</div>
          </router-link>
          <router-link :to="{ name: 'AddPost' }" class="header-link" active-class="active">
            <div class="" @click="isOpenMobileMenu = false">new post</div>
          </router-link>
        </div>
        <div class="menu" @click="isOpenMobileMenu = !isOpenMobileMenu">
          <img v-if="!isOpenMobileMenu" class="menu-open" src="@/assets/img/menu-open.svg" alt="">
          <img v-else class="menu-close" src="@/assets/img/menu-close.svg" alt="">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isOpenMobileMenu: false,
    };
  },
};
</script>
