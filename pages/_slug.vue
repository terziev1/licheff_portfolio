<template>
  <section class="section tl-content">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-1 is-offset-2+tablet is-8 is-10-tablet ">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to home</nuxt-link>
          </p>
          <h1 class="title is-2">
            {{ post.fields.title }}
          </h1>

          <hr>
          <div class="content" v-html="$md.render(post.fields.content)"></div>
          <img v-for="(img,id) in post.fields.images" :src="img.fields.file.url" :alt="img.fields.file.name" :key="id">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import client from '~/plugins/contentful';

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload };

    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return { post: entries.items[0] };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      title: this.post.fields.title,
    };
  },
};
</script>
<style scoped>

</style>
