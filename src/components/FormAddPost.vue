<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-header">
      <h3 class="h3">
        <router-link tag="div" :to="{ name: 'Home' }">
          <ArrowLeft/>
        </router-link>
        new post
      </h3>
    </div>
    <input class="input" type="text" placeholder="title" v-model="title">
    <textarea class="input text" placeholder="text" v-model="body"></textarea>
    <div class="form-footer">
      <button class="btn-dark" type="submit">add a post</button>
      <button class="btn-transparent" type="submit" @click="cancel">cancel</button>
    </div>
    <p v-if="formSubmitted" class="form-submitted">Form submitted!</p>
  </form>
</template>

<script>
import axios from 'axios';
import ArrowLeft from '@/components/ArrowLeft.vue';

export default {
  name: 'FormAddPost',
  components: {
    ArrowLeft,
  },
  data() {
    return {
      title: '',
      body: '',
      formSubmitted: false,
    };
  },
  methods: {
    submit() {
      const data = {
        title: this.title,
        body: this.text,
      };
      axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(() => {
          this.formSubmitted = true;
          this.title = '';
          this.body = '';
        })
        .catch((response) => {
          console.log(response);
        });
    },
    cancel() {
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>
