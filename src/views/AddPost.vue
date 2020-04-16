<template>
  <div class="add-post">
    <div class="container">
      <FormAddPost />
    </div>
  </div>
</template>

<script>
import FormAddPost from '@/components/FormAddPost.vue';

export default {
  name: 'AddPost',
  components: {
    FormAddPost,
  },
};
</script>
