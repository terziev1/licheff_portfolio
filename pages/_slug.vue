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
          <div v-for="(img,id) in post.fields.images" :key="id" class="projectImgWrapper">
            <p>{{img.fields.title}}</p>
            <img  :src="img.fields.file.url" :alt="img.fields.title" :key="id">
          </div>
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
.projectImgWrapper{
  margin-bottom: 60px;
}
.projectImgWrapper p  {
  font-size: 13px;
  text-transform: uppercase;
  color: #898989;
  margin-bottom: 4px;
  font-family: 'Poppins', sans-serif;

}

.content{
  font-size: 16px;
  line-height: 1.9em;
  margin-bottom: 60px;
}
.content p {
    font-size: 16px;
  line-height: 1.9em;
  margin-bottom: 60px;
}
.content * {
  color: #6e6e6e !important;
}
.title{
  font-weight: 500;
  color: #898989;
  font-size: 16px !important;
  margin-bottom: 20px;
  margin-top: 0 !important;

}
.subtitle{
  font-size: 12px !important;
  margin-bottom: 5px;
  margin-top: 0 !important;
}
</style>
