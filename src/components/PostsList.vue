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
          <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <!-- eslint-disable max-len -->
            <path fill="#333" d="M20.662 9.188l-.378.38c-.252.25-.252.657 0 .908l4.496 4.47H4.643c-.355 0-.643.288-.643.643v.536c0 .355.288.643.643.643H24.78l-4.496 4.47c-.252.251-.252.658 0 .91l.378.378c.251.251.658.251.91 0l6.24-6.214c.25-.251.25-.658 0-.91l-6.24-6.214c-.252-.25-.659-.25-.91 0z"/>
          </svg>
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
            <svg class="arrow-right" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <!-- eslint-disable max-len -->
              <path fill="#333" d="M20.662 9.188l-.378.38c-.252.25-.252.657 0 .908l4.496 4.47H4.643c-.355 0-.643.288-.643.643v.536c0 .355.288.643.643.643H24.78l-4.496 4.47c-.252.251-.252.658 0 .91l.378.378c.251.251.658.251.91 0l6.24-6.214c.25-.251.25-.658 0-.91l-6.24-6.214c-.252-.25-.659-.25-.91 0z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="load-more" v-if="shownButtonLoadMore" @click="emitLoadMorePosts">load more</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['posts'],
  name: 'PostsList',
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
