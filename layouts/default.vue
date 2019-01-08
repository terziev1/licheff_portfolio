<template>
  <div class="tl-wrapper">
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
    <nuxt/>
    <transition name="slide">
      <div class="resume" v-show="resumeView">
         <div class="container">
           <div class="columns">
            <div class="column is-offset-1 is-offset-2+tablet is-8 is-10-tablet ">

              <a @click="resumeView = !resumeView">Back to home</a>
           </div>
         </div>
        </div>
      </div>
   </transition>
  </div>
</template>
<script>
export default {
  data(){
    return{
      resumeView:false,
    }
  }
}
</script>

<style>
*{
  font-family: 'Merriweather', serif;
}
html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
h1 {
  font-weight: 400;
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
}

h5 {
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
}
.flex {
  display: flex;
}
.tl-wrapper {
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
  border-right: 1px solid #ddd;
  min-width: 300px;
}
.logo{
  position: absolute;
  top:30px;
  left: 30px;
}
.tl-nav h5 {
  margin-bottom: 20px;
}
@media (max-width: 1024px) {
  html{
    overflow: visible !important;
    height: auto;
  }
  .tl-wrapper {
    flex-wrap: wrap;
  }
  .tl-nav {
    height: auto;
    flex-grow: 1;
    width: 100%;
    max-width: 83%;
    margin: 20px auto;
    padding: 1.5rem;
    border-right: none;
  }
  .tl-content {
    width: 100%;
    overflow: visible !important;
    height: auto;
  }
  .logo{
    position: static;
  }
}
@media (max-width: 640px) {
  .tl-nav{
    max-width: unset;
  }
}

.descriptionCopy{
  font-size: 14px;
  color: #6e6e6e !important;
  margin-bottom: 15px;
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

.tl-content {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 66%;
}
@media (max-width:1024px) {
  .tl-content{
    width: 100%;
  }
}

.resume{
    background-color: #ddd;
    position: fixed;
    right: 0;
    top: 0%;
    width: 67%;
    height: 100vh;
    padding-top: 40px;
}
.resumeBtn{
  font-size: 12px !important;
  color: #000;
  text-decoration: underline;

}
.slide-leave-active,
.slide-enter-active {
  transition: 150ms ease-out;
}
.slide-enter {
  transform: translateX(60%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
