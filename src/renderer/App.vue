<template>
  <div id="app">
  <span id="hint">
    &ensp;+&ensp;
  </span>
    <div id="navList">
      <navigation></navigation>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Navigation'

export default {
  name: 'semantic-media-manager',
  components: {
    navigation
  }
}
</script>

<style scoped>
#navList{
  display:none;
}

#hint:hover + #navList, #navList:hover{
  display: block;
  position: absolute;
}
#hint{
  font-weight: bold;
  font-size: 150%;
  background-color: lightblue;
  border-bottom: 1px solid darkblue;
  border-right: 1px solid darkblue;
  border-bottom-right-radius: 50%;
}
#navList{
  background-color: lightgrey;
  border: 1px solid darkgrey;
  padding: .5rem;
}
</style>
