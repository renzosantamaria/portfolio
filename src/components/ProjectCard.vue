<template>
  <article class="project-card">
    <div class="card-side front">
      <h1>{{title}}</h1>
      <img :src="require(`@/assets/${projectImg}`)" alt="picture of a proyect!">
    </div>
    <div class="card-side back">
      <!-- <h1>this is the back side!</h1> -->
      <BaseButton :link="link_website">See the proyect</BaseButton>
      <BaseButton :link="link_code">See the code</BaseButton>
    </div>


  </article>
</template>

<script>
export default {
    props:[
        'title',
        'projectImg',
        'link_website',
        'link_code'
    ],
    computed:{

    }
}
</script>

<style lang="scss">
.project-card{
  font-size: 1.2rem;
  perspective: 90rem;
  -moz-perspective: 90rem;
  position: relative;
  // width: 24rem;

  .card-side{
    backface-visibility: hidden;
    height: 24rem;
    width: 20rem;
    // border: 1px solid black;
    border-radius: 0.6rem;
    background-color: rgb(47, 47, 47);
    color: #dbf1eb;
    transition: all .8s;
    // cursor: pointer;
    top: 0;
    left: 0;
    img{
      height: 150px;
      widows: 200px;
      clip-path: circle(50% to 50% 50%);
    }

  }
  .front{
    cursor: pointer;
    // box-shadow: 1px 1px 3px #dbf1eb;
  }
  .back{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: rotateY(180deg);
    background-image: linear-gradient(to right bottom,rgb(66, 66, 66), rgb(144, 144, 144) );
    // box-shadow: -1px 1px 3px #dbf1eb;
  }

    img{
        width: 16rem;
    }
    &:hover .front{
      // background-color: rgb(224, 156, 116);
      transform: rotateY(-180deg);
    }
    &:hover .back{
      // background-color: rgb(224, 156, 116);
      transform: rotateY(0deg);
    }
}


</style>