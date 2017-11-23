<template>
  <div id="app">
  <div id="hint">
    +++
  </div>
    <div id="navList">
        navi
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'semantic-media-manager'
  }
</script>

<style lang="stylus">
#navList
  display none

</style>
