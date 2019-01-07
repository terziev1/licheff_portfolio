<template>
  <div class="tl-wrapper">
    <nav class="tl-nav">
      <h1>Todor Licheff</h1>
      <h5>Desiner</h5>
      <p>is the founder & inventor of ContactBoards who currently works at Salesforce Experience Design and is featured on the InVision blog.</p>
      <div class="flex socials">
        <div>
          <a href="#" target="_blank">soc1</a>
        </div>
        <div>
          <a href="#" target="_blank">soc2</a>
        </div>
        <div>
          <a href="#" target="_blank">soc3</a>
        </div>
      </div>
    </nav>
    <nuxt/>
  </div>
</template>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
/* optional: show position indicator in red */
::-webkit-scrollbar-thumb {
  background: #ff0000;
}
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
  border-right: 1px solid #ddd;
  min-width: 300px;
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
    height: 300px;
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
}
@media (max-width: 640px) {
  .tl-nav{
    max-width: unset;
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

.tl-content {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>
