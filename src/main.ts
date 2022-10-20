import { createApp } from 'vue'
import App from './App.vue'
import * as icons from './index'

const app = createApp(App)

for (const name in icons) {
  console.log('add component', name, icons[name])
  app.component(name, icons[name])
  // iconNames.push(name)
}

console.log(app)
app.mount('#app')
