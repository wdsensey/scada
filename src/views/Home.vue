<template>
  <div class="home">
    <div class="container">
      <Slider :sliderPosts="sliderPosts" @sendModalData="openModal" />
    </div>
    <modal v-if="showModal" :modalData="modalData" @close="showModal = false"></modal>
    <PostsList :posts="listPosts"
               @sendModalData="openModal"
               @loadMorePosts="loadMorePosts(data)" />
  </div>
</template>

<script>
import PostsList from '@/components/PostsList.vue';
import Slider from '@/components/Slider.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    PostsList,
    Slider,
  },
  data() {
    return {
      allPosts: null,
      showAllPosts: false,
      showModal: false,
      modalData: null,
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
    openModal(post) {
      this.showModal = true;
      this.$emit('sendModalData', post);
      this.modalData = post;
    },
  },
};
</script>
