<template>
  <div id="wrapper">
    <p>
      <input type="file" webkitdirectory="" ref="fileInput" @change="dirSet" />
    </p>
    <p>
      <input type="text" v-model="file" /><button @click="dirSet('', file)">Ok</button>
    </p>
    <div class="block">
      <h1>Enthaltene Daten</h1> <button @click="dirUp">Up</button> {{baseDir}}
      <div class="fluidBox">
        <div class="fluid" v-for="(c, idx) in childs">
          <img v-if="c.isImage" :src="c.path" width="80px" height="auto" />
          <img v-else-if="c.isDir" @click="openFolder(c.path)" src="~@/assets/blue-folder.svg" width="160px" height="auto" />
          <video v-else-if="c.isVideo" width="320" controls>
            <source :src="c.path" :type="'video/' + c.format">
          </video>
          <div>{{c.fileName}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fs from 'fs-extra'
import FilePack from './LandingPage/FileContainers'
export default {
  name: 'file-manager',
  data: function () {
    return {
      file: '',
      childs: [],
      baseDir: []
    }
  },
  methods: {
    async dirUp () {
      this.baseDir.pop()
      await this.dirSet('', this.baseDir.pop())
    },
    async dirSet (e, file) {
      //  document.getElementsByTagName('input')[0].files[0].path
      if (!file) this.file = this.$refs.fileInput.files[0].path
      else this.file = file
      this.childs.splice('deleteCount')
      this.baseDir.push(this.file)
      let ch = await fs.readdir(this.file)
      for (let path of ch) {
        let chx = new FilePack(this.file + '\\' + path, path)
        await chx.parseFile()
        this.childs.push(chx)
      }
    },
    async openFolder (path) {
      this.file = path
      await this.dirSet('', path)
    }
  }
}
</script>

<style scoped="">
.fluidBox{
  display: flex;
  flex-wrap: wrap;
}
.fluid{
  max-width: 25%;
  text-align: center;
  padding: 0.5rem;
}
.fluid div{
  word-break: break-word;
}
h1, h2{
  padding-bottom: .5rem;
}
.block{
  margin: 1em;
}
pre{
  border: 1px solid black;
  background-color: lightgrey;
}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    margin-left: 2em;
    width: 100vw;
  }

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    color: #555;
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    color: #2c3e50;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    color: black;
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    color: #fff;
    background-color: #4fc08d;
    transition: all 0.15s ease;
    box-sizing: border-box;
    border: 1px solid #4fc08d;
  }

  .doc button.alt {
    color: #42b983;
    background-color: transparent;
  }
</style>
