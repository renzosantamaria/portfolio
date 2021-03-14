<template>
  <div id="app">
    <TheHeader />
    <router-view/>
    <TheFooter />
  </div>
</template>

<script>
  export default {
    data(){
      return{
        name: 'tilino',
        lastName: 'infielino'
      }
    }
  }

</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-size: 62.5%;
}
#app {
  position: relative;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  background-color: rgb(17, 17, 17);
  // max-width: 1600px;
}


</style>