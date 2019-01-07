<template>
  <div class="tl-content">
    <nuxt-link class="project" v-for="(post, index) in posts" :key="index" :to="post.fields.slug">
      <img class="feauturedImage" :src="post.fields.feauturedImage[0].fields.file.url" alt>
      <img class="bgImage" :src="post.fields.backgroundImage[0].fields.file.url" alt>
      <h1 class="homepageTitle">{{ post.fields.title }}</h1>
      <h1 class="homepageSubTitle">{{ post.fields.type }}</h1>
    </nuxt-link>
  </div>
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
    title: "Todor Licheff's portfolio"
  }
};
</script>
<style scoped>
.tl-content .project {
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  position: relative;
}
.homepageTitle {
  position: absolute;
  bottom: 40px;
  left: 30px;
  font-size: 32px;
  color: #fff;
}
.homepageSubTitle {
  position: absolute;
  bottom: 10px;
  left: 30px;
  font-size: 18px;
  color: #fff;
}

.feauturedImage {
  height: 60%;
  width: auto;
}
.bgImage {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>

