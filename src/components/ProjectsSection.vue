<template>
  <section class="projects">
    <div class="sub-title-box front">
      <h1>MY PROJECTS</h1>
    </div>
    <div class="sub-title-box behind">
      <h1>MY PROJECTS</h1>
    </div>

    <ul>
      <li v-for="project in projects" :key="project.title">
        <ProjectCard
        :title="project.title"
        :projectImg="project.project_img_src"
        :link_website="project.website"
        :link_code="project.github_code" />
      </li>
    </ul>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components:{
    ProjectCard
  },
  computed:{
    projects(){
      return this.$store.getters.getProjects
    }
  }
}
</script>

<style lang="scss">
  .projects{
    position: relative;
    padding: 4rem 0;
    // background-color: rgb(118, 228, 200);
    // background-color: rgb(142, 221, 201);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .sub-title-box {
      color: rgb(41, 85, 87);
      padding: 1rem 2.6rem;
      background-color:rgb(16, 149, 114);
      transform: skewX(-25deg);
      margin: 2rem 0;
      font-size: 1.2rem;
      h1{
        transform: skewX(25deg);
      }

    }
    .front{
      // position: relative;
    }

    .behind{

      background-color: rgb(159, 216, 201);
      position: absolute;
      
      top: 3.5rem;
      margin-left: -4px;
    }
    ul{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      max-width: 1400px;
      li{
        list-style: none;
        margin: 1rem;
      }
    }
  }
</style>