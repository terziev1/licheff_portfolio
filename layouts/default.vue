<template>
  <div class="tl-wrapper">
    <nav class="tl-nav">
      <nuxt-link to="/">
        <img class="logo" src="Logo.svg" alt="logo-img">
      </nuxt-link>
      <h1>Todor Licheff</h1>
      <h5>UI / UX Designer</h5>
      <p
        class="descriptionCopy"
      >A young multidisciplinary artist with a solid background in User Experience/Interfaces, Branding & WEB Design. The dynamics of progress and new challenges developed a keen interest in the field of brand perceptions. A self-driven hard worker and a passionate freethinker who is always looking forward to expand their worldview.</p>
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
        <div>
          <a href="mailto:licheff.o@gmail.com">
            <img src="/Email.svg" alt="email-img">
          </a>
        </div>
      </div>
    </nav>
    <nuxt/>
    <transition name="slide">
      <div class="resume" v-show="resumeView">
        <div class="container" style="height:100%">
          <div class="columns" style="height:100%">
            <div
              class="column is-offset-1 is-offset-2+tablet is-8 is-10-tablet"
              style="height:100%"
            >
              <a @click="resumeView = !resumeView" class="resumeHeading">
                <img class="backBtn" src="/Back.svg" alt> Résumé
              </a>
              <p class="workExp">Work Experience</p>
              <div class="resumeRow" style="height:100%">
                <div class="resumeBlock">
                  <h3>UI / UX Designer, Jarvis OOD</h3>
                  <h4>March 2018 - July 2018</h4>
                  <p>– Creating a coherent visual identity for the brand</p>
                  <p>– Working on the user interface of the brand’s software</p>
                  <p>– Taking main part in discussing the user experience of the digital products</p>
                </div>
                <div class="resumeBlock">
                  <h3>Design Team Leader, Prodesign Bulgaria</h3>
                  <h4>October 2016 - February 2016</h4>
                  <p>– Project management and schedule planning</p>
                  <p>– Allocation of tasks and delegating customer feedback</p>
                  <p>– Regular client meetings to present projects</p>
                  <p>– Key role in the design of a new Prodesign brand identity and development of a brandbook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      resumeView: false
    };
  }
};
</script>

<style>
* {
  font-family: "Merriweather", serif;
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
  font-size: 32px;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
}

h5 {
  font-size: 18px;
  font-weight: 400;
  font-family: "Poppins", sans-serif;
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
.logo {
  position: absolute;
  top: 30px;
  left: 30px;
}
.tl-nav h5 {
  margin-bottom: 20px;
}
@media (max-width: 1024px) {
  html {
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
  .logo {
    position: static;
  }
}
@media (max-width: 640px) {
  .tl-nav {
    max-width: unset;
  }
}

.descriptionCopy {
  font-size: 14px;
  margin-bottom: 15px;
  color: #898989;
  line-height: 1.8em;
  margin-bottom: 20px;
}
.socials {
  margin: 20px 0;
}
.socials a {
  padding: 0 12px;
  transition: all 300ms ease-out;
}
.socials a:hover {
  opacity: 0.8;
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
@media (max-width: 1024px) {
  .tl-content {
    width: 100%;
  }
}

.resume {
  background-color: #eceff1;
  position: fixed;
  right: 0;
  top: 0%;
  width: 67%;
  height: 100vh;
  padding-top: 40px;
}
@media (max-width: 640px) {
  .resume {
    width: 100%;
    padding-left: 40px;
  }
}
.resumeBtn {
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
.resumeHeading {
  font-size: 28px;
  color: #000;
  font-family: "Poppins", sans-serif;
  margin-bottom: 50px;
  display: block;
}
.resumeRow {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20px;
  overflow-x: hidden;
  overflow-y: auto;
}
.resumeBlock {
  margin: 0px 0 30px;
}
.resumeBlock h3 {
  font-size: 18px;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
}
.resumeBlock h4 {
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 5px;
}
.resumeBlock p {
  font-size: 14px;
}
.workExp {
  color: #d0021b;
}
.backBtn {
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
}
</style>
