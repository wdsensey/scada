<template>
  <div class="home-list">
    <div class="container">
      <div class="controls">
        <button class="control" :class="{ active: activeControlList }" @click="layout = 'list'">
          list
        </button>
        <button  class="control" :class="{ active: !activeControlList }" @click="layout = 'tiles'">
          tiles
        </button>
      </div>
      <div class="lines" v-if="layout === 'list'">
        <div class="line" v-for="post in posts"
             :key="post.id"
             @click="$emit('sendModalData', post)">
          {{ post.title }}
          <ArrowRight />
        </div>
      </div>
      <div class="tiles" v-if="layout === 'tiles'">
        <div class="tile"
             v-for="post in posts"
             :key="post.id"
             @click="$emit('sendModalData', post)">
          <div class="tile-wrapper">
            <img src="@/assets/img/post-img.png" alt="">
            <div class="title">{{ post.title }}</div>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div class="load-more" v-if="shownButtonLoadMore" @click="emitLoadMorePosts">load more</div>
    </div>
  </div>
</template>

<script>
import ArrowRight from '@/components/ArrowRight.vue';

export default {
  props: ['posts'],
  name: 'PostsList',
  components: {
    ArrowRight,
  },
  data() {
    return {
      layout: 'list',
      shownButtonLoadMore: true,
    };
  },
  computed: {
    activeControlList() {
      return this.layout === 'list';
    },
  },
  methods: {
    emitLoadMorePosts() {
      this.$emit('loadMorePosts');
      this.shownButtonLoadMore = false;
    },
  },
};
</script>
