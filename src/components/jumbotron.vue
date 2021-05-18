<template>
  <div class="hello">
    <!-- Jumbotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-6">{{ msg }}<img src="../assets/becool-logo-white.png" alt="BeCool Cooking" class="logo"></h1>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Jumbotron',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>