<template>
<div>
  <div ref="dragArea">
<h1>Drag here</h1>
  </div>
  <div ref="listArea">
    <ul>
      <li v-for="file in files">
        {{file}}
        <img :src="file.path" width="40" height="auto" />
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import fs from 'fs-extra'

export default {
  mounted () {
    this.$nextTick(() => {
      this.$refs.dragArea.ondragover = this.$refs.dragArea.ondrop = (ev) => {
        ev.preventDefault()
      }

      this.$refs.dragArea.ondrop = (ev) => {
        for (let file of ev.dataTransfer.files) this.parseInputFile(file)

        console.log(ev.dataTransfer.files[0].path)
        ev.preventDefault()
      }
    })
  },
  data () {
    return {
      files: []
    }
  },
  methods: {
    async parseInputFile (file) {
      let ex = await fs.exists(file.path)
      let stats = await fs.stat(file.path)
      let isDir = stats.isDirectory()
      this.files.push({
        path: file.path,
        ex,
        stats,
        isDir,
        isFile: stats.isFile()
      })
    }
  }
}
</script>

<style>
</style>
