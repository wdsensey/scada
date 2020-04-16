<template>
  <flickity ref="flickity" class="home-slider" :options="flickityOptions" v-if="sliderPosts">
    <div class="carousel-cell"
         v-for="post in sliderPosts"
         :key="post.id"
         @click="$emit('sendModalData', post)">
      <h3 class="h3">{{ post.title }}</h3>
      <div class="read-more">read more</div>
    </div>
  </flickity>
</template>

<script>
import Flickity from 'vue-flickity';

export default {
  props: ['sliderPosts'],
  name: 'Slider',
  components: {
    Flickity,
  },
  data() {
    return {
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        contain: true,
      },
    };
  },
};
</script>
