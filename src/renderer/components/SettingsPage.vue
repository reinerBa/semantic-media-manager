<template>
  <div id="wrapper">
    <div class="block">
      <h1>Supported Formats</h1>
      <div class="fluidBox">
        <div class="fluid" v-for="(f, key, idx) in settings.formats">
          <input type="checkbox" :id="'format'+idx" v-model="settings.formats[key]"/>
          <label :for="'format'+idx">{{key}}</label>
        </div>
      </div>
    </div>

  <div class="block">
    <h2>Settings raw</h2>
    <pre>
      {{settings}}
    </pre>
  </div>
  </div>
</template>

<script>
import settingsObj from './LandingPage/SettingsStore'
export default {
  name: 'settings-page',
  data: function () {
    return {
      settings: settingsObj
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
  padding: 0.5rem;
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
