<template>
  <form class="form" @submit.prevent="submit">
    <div class="form-header">
      <h3 class="h3">
        <router-link tag="div" :to="{ name: 'Home' }">
          <svg class="arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <!-- eslint-disable max-len -->
            <path fill="#333" d="M8.503 6.891l.284.284c.189.189.189.494 0 .682L5.415 11.21h15.103c.266 0 .482.216.482.482v.402c0 .266-.216.482-.482.482H5.415l3.372 3.353c.189.188.189.493 0 .681l-.284.284c-.188.189-.493.189-.682 0l-4.68-4.66c-.188-.189-.188-.494 0-.682l4.68-4.66c.189-.19.494-.19.682 0z"/>
          </svg>
        </router-link>
        new post
      </h3>
    </div>
    <div class="input-wrapper">
      <input class="input" type="text" placeholder="title" v-model="title">
      <div class="error" v-if="$v.title.$dirty && !$v.title.required">Field is empty</div>
      <div class="error" v-if="$v.title.$dirty && !$v.title.minLength">Title must have at least {{$v.title.$params.minLength.min}} letters.</div>
    </div>
    <div class="input-wrapper">
      <textarea class="input text" placeholder="text" v-model="body"></textarea>
      <div class="error" v-if="$v.body.$dirty && !$v.body.required">Field is empty</div>
      <div class="error" v-if="$v.body.$dirty && !$v.body.minLength">Body must have at least {{$v.body.$params.minLength.min}} letters.</div>
    </div>
    <div class="form-footer">
      <button class="btn-dark" type="submit">add a post</button>
      <button class="btn-transparent" type="submit" @click="cancel">cancel</button>
    </div>
    <p v-if="formSubmitted" class="form-submitted">Form submitted!</p>
  </form>
</template>

<script>
import axios from 'axios';
import { required, minLength } from 'vuelidate/lib/validators';

export default {
  name: 'FormAddPost',
  data() {
    return {
      title: '',
      body: '',
      formSubmitted: false,
    };
  },
  validations: {
    title: {
      required,
      minLength: minLength(4),
    },
    body: {
      required,
      minLength: minLength(10),
    },
  },
  methods: {
    submit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const data = {
        title: this.title,
        body: this.body,
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
