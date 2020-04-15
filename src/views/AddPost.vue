<template>
  <div class="home">
    <Header />
    <div class="container">
      <flickity ref="flickity" class="home-slider" :options="flickityOptions" v-if="sliderPosts">
        <div class="carousel-cell" v-for="post in sliderPosts" :key="post.id">
          <div class="title">{{ post.title }}</div>
        </div>
      </flickity>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Flickity from 'vue-flickity';
import axios from 'axios';

export default {
  name: 'AddPost',
  components: {
    Header,
    Footer,
    Flickity,
  },
  data() {
    return {
      allPosts: null,
      showAllPosts: false,
      flickityOptions: {
        prevNextButtons: false,
        pageDots: false,
        contain: true,
      },
    };
  },
  created() {
    this.getStartPosts();
  },
  computed: {
    sliderPosts() {
      return this.allPosts ? this.allPosts.slice(0, 3) : null;
    },
    listPosts() {
      if (!this.showAllPosts) {
        return this.allPosts ? this.allPosts.slice(3, 11) : null;
      }
      return this.allPosts ? this.allPosts.slice(3) : null;
    },
  },
  methods: {
    getStartPosts() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          this.allPosts = response.data;
        })
        .catch((response) => {
          console.log(response);
        });
    },
    loadMorePosts() {
      this.showAllPosts = true;
    },
  },
};
</script>
