<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <img class="modal-close"
                   src="@/assets/img/menu-close.svg" @click="$emit('close')" alt="">
              <h3 class="h3">{{ modalData.title }}</h3>
              <p> {{ modalData.body }}</p>
            </slot>
          </div>

          <div class="modal-body">
            <h3 class="h3">comments</h3>
            <div class="comments" v-if="comments">
              <div class="comment" v-for="comment in listComments" :key="comment.id">
                <p class="comment-title">{{ comment.name }} {{ comment.email }}</p>
                <p class="comment-body">
                  {{ comment.body }}
                </p>
              </div>
            </div>
            <div class="load-more" v-if="shownButtonLoadMore" @click="loadMoreComments">
              load more
            </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  props: ['modalData'],
  name: 'Modal',
  data() {
    return {
      comments: null,
      shownButtonLoadMore: true,
      showAllPosts: false,
    };
  },
  created() {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${this.modalData.id}/comments`)
      .then((response) => {
        this.comments = response.data;
      })
      .catch((response) => {
        console.log(response);
      });
  },
  computed: {
    listComments() {
      if (!this.showAllPosts) {
        return this.comments ? this.comments.slice(0, 2) : null;
      }
      return this.comments ? this.comments.slice(0) : null;
    },
  },
  methods: {
    loadMoreComments() {
      this.showAllPosts = true;
      this.shownButtonLoadMore = false;
    },
  },
};
</script>
