<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div class="container">
    <Banner />
    <!-- <icon-filter></icon-filter> -->
    <ul class="wrapper">
      <li
        class="item"
        v-for="iconComponentName in iconNames"
        :key="iconComponentName"
        :title="iconComponentName"
        @click="copyName(iconComponentName)"
      >
        <component
          :is="iconComponentName"
          size="2rem"
        />
        <div>{{iconComponentName}}</div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Banner from './components/Banner.vue'
import * as icons from './index'
import { ref, markRaw } from 'vue'

// console.log(icons)
const iconNames: string[] = []
for (const name in icons) {
  iconNames.push(name)
}

function copyName(name: any) {
  const input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', name)
  document.body.appendChild(input)
  input.setSelectionRange(0, 9999)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
  console.log('copy success.')
  // this.$message.success('复制成功')
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
body{
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
}
.container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}
.wrapper {
  list-style: none;
  display: flex;
  flex-flow: wrap;
  margin: 0;
  padding: 15px 0;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;
  color: #486491;
  font-size: 14px;
  transition: background-color 0.2s;
}
.item:hover{
  background-color: #e7ecf3;
}
.item svg{
  margin-bottom: 12px;
}
.kalman-icon {
  display: inline-block;
}
</style>
