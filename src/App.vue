<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import Default from '@/layouts/Default.vue';
import NoFooter from '@/layouts/NoFooter.vue';

export default {
  name: 'App',
  components: {
    Default,
    NoFooter,
  },
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'default'}`;
    },
  },
};
</script>
