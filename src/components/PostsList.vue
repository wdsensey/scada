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
        <div class="line" v-for="post in posts" :key="post.id">
          {{ post.title }}
        </div>
      </div>
      <div class="tiles" v-if="layout === 'tiles'">
        <div class="tile" v-for="post in posts" :key="post.id">
          <div class="tile-wrapper">
            <img src="@/assets/img/post-img.png" alt="">
            <div class="title">{{ post.title }}</div>
          </div>
        </div>
      </div>
      <div class="load-more" @click="$emit('loadMorePosts')">load more</div>
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
    };
  },
  computed: {
    activeControlList() {
      return this.layout === 'list';
    },
  },
};
</script>
