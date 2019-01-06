<template>


    <div class="tl-content">
        <nuxt-link class="project" v-for="(post, index) in posts" :key="index" :to="post.fields.slug">
          {{ post.fields.title }}
        </nuxt-link>
    </div>

  <!-- <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <h1 class="title is-2">Latest Posts</h1>
          <hr>

          <h2
            class="title is-4"
            v-for="(post, index) in posts"
              :key="index">
            <nuxt-link :to="post.fields.slug">
              {{ post.fields.title }}
            </nuxt-link>


          </h2>
        </div>
      </div>
    </div>
  </section>-->
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "post",
        order: "-sys.createdAt"
      })
      .then(entries => {
        return { posts: entries.items };
      })
      .catch(e => console.log(e));
  },
  head: {
    title: "Latest Posts"
  }
};
</script>
<style>
.tl-wrapper {
  display: flex;
}
.flex {
  display: flex;
}

.tl-nav {
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px;
  width: 33%;
  min-width: 300px;
}
.tl-nav h5 {
  margin-bottom: 20px;
}
.tl-content {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}
.tl-content .project {
  height: 500px;
  width: 100%;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
@media (max-width: 1024px) {
  .tl-wrapper {
    flex-wrap: wrap;
  }
  .tl-nav {
    height: 300px;
    flex-grow: 1;
    width: 100%;
  }
  .tl-content {
    width: 100%;
    overflow: visible;
    height: auto;
  }
}

h1 {
  font-weight: 700;
}
h5 {
  font-weight: 400;
}
.socials {
  margin: 20px 0;
}
.socials a {
  padding: 0 12px;
}
.socials a:first-of-type {
  padding-left: 0;
}
</style>

