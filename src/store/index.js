import Vue from 'vue'
import Vuex from 'vuex'
import projects from '@/assets/projects.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'Admin',
    projects: projects
  },
  mutations: {

  },
  getters:{
    getProjects(state){
      return state.projects
    } 
  }
})