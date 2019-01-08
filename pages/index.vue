<template>
  <div class="tl-content">
    <nuxt-link class="project" v-for="(post, index) in posts" :key="index" :to="post.fields.slug">
      <img class="feauturedImage" :src="post.fields.feauturedImage[0].fields.file.url" alt>
      <img class="bgImage" :src="post.fields.backgroundImage[0].fields.file.url" alt>
      <h1 class="homepageTitle">{{ post.fields.title }}</h1>
      <h2 class="homepageSubTitle">{{ post.fields.type }}</h2>
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
.tl-content .project:hover .feauturedImage{
  transform: scale(1.03)
}
.homepageTitle {
  position: absolute;
  font-size: 28px;
  bottom: 48px;
  left: 30px;
  color: #fff;
}
.homepageSubTitle {
  position: absolute;
  left: 30px;
  bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
}

.feauturedImage {
  height: 60%;
  width: auto;
  transition:all 300ms ease-out;

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

