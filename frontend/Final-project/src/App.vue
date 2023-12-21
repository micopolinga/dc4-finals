<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container">
  <header>
   

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/dancer">Dancer</RouterLink>
        <RouterLink to="/style">Style</RouterLink>
        <RouterLink to="/event">Event</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.container {
  margin-left: 0vw;
}

.wrapper {

  margin-left: 39vw;
}

/* RouterLink {

  font-size: 5rem;
} */

nav {
  width: 100%;

  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  font-size: 1.5rem;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
