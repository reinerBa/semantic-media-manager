<template>
<div>
  <drag-area drop-callback="parseInputFile">
    <h1>Drag here</h1>
  </drag-area>
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
import dragArea from 'dragArea'
import fs from 'fs-extra'

export default {
  components: {
    dragArea
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
/*
all subdirectory files and directorys:
function getFiles (dir, files_){
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}

console.log(getFiles('path/to/dir'))


// ondrop:
document.ondragover = document.ondrop = (ev) => {
  ev.preventDefault()
}

document.body.ondrop = (ev) => {
  console.log(ev.dataTransfer.files[0].path)
  ev.preventDefault()
}*/
</style>
