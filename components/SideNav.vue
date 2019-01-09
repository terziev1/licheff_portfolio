<template>
    <nav class="tl-nav">
      <nuxt-link to="/">
        <img class="logo" src="Logo.svg" alt="logo-img">
      </nuxt-link>
      <h1>Todor Licheff</h1>
      <h5>UI / UX Designer</h5>
      <p class="descriptionCopy">A young multidisciplinary artist with a solid background in User Experience/Interfaces, Branding & WEB Design. The dynamics of progress and new challenges developed a keen interest in the field of brand perceptions. A self-driven hard worker and a passionate freethinker who is always looking forward to expand their worldview.</p>
      <a @click="resumeView = !resumeView" class="resumeBtn">View Resume &#8594;</a>
      <div class="flex socials">
        <div>
          <a href="https://www.behance.net/Licheff" target="_blank">
            <img src="/Behance.svg" alt="behance-img">
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/licheff" target="_blank">
            <img src="/Linkedin.svg" alt="linkedin-img">
          </a>
        </div>
        <div>
          <a href="https://dribbble.com/Licheff" target="_blank">
            <img src="/Dribbble.svg" alt="dribble-img">
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/licheff.dz/" target="_blank">
            <img src="/Instagram.svg" alt="instagram-img">
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
</script>

<style>
</style>
