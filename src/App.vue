<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/becool-logo-black.png">
    <TagLine msg="Nouveau dans votre région !"/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/laCarte">La Carte</router-link> |
      <router-link to="/restaurants">Restaurants</router-link> |
      <router-link to="/galerie">Galerie</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TagLine from './components/tagLine.vue'
export default {
  name: 'App',
  components: {
    TagLine
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
