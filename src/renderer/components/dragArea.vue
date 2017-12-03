<template>
  <div @drop="propagate">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    'debug': {
      type: Boolean,
      default: false
    },
    'drop-callback': {
      required: true,
      type: Function
    }
  },
  mounted () {
    document.ondragover = document.ondrop = (ev) => {
      ev.preventDefault()
    }
  },
  methods: {
    propagate (ev) {
      if (this.debug) console.log(ev.dataTransfer.files[0].path)
      this['drop-callback'](ev.dataTransfer.files)
      this.prevent()
    }
  }
}
</script>

<style>
/*
// ondrop:
document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  console.log(ev.dataTransfer.files[0].path)
  ev.preventDefault()
}*/
</style>
