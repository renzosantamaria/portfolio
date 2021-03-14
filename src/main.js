import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import KnowledgeSection from '@/components/KnowledgeSection.vue'
import BaseButton from '@/components/BaseButton.vue'
import store from './store'

Vue.config.productionTip = false
Vue.component('TheHeader', TheHeader)
Vue.component('TheFooter', TheFooter)
Vue.component('ProjectsSection', ProjectsSection)
Vue.component('KnowledgeSection', KnowledgeSection)
Vue.component('BaseButton', BaseButton)

new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
