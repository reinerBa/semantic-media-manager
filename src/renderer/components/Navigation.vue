<template>
<ul>
  <li v-for="route in items">
      <router-link :to="route.path">
          <span ></span> {{ route.name }}
      </router-link>
  </li>
</ul>
</template>

<script>
export default {
  created () {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
  },
  data () {
    return {
      items: []
    }
  }
}
</script>

<style>
</style>
