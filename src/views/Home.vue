<template>
  <main>
    <section class="hero">
      <video class="hero-video" autoplay loop muted>
        <source src="@/assets/hero-video.mp4"
          type="video/mp4">
      </video>
    </section>
    <div class="main-content">
      <KnowledgeSection />
      <ProjectsSection />
    </div>

    
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
main{
  .hero{
    // position: fixed;
    // z-index: -1;
    // max-height: 600px;
    &-video{
      // width: 100%;
      height: 120vh;
      position: fixed;
      top: 0;
      left: 0;
    }
  }
  .main-content{
    padding: 0 5%;
  }
}
</style>
