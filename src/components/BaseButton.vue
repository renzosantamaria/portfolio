<template>
  <a class="base-button" :href="link" target="_blank">
    <slot />
  </a>
</template>

<script>
export default {
  props:[
    'link'
  ]
}
</script>

<style lang="scss">
  .base-button{
    width: 12rem;
    text-decoration: none;
    color: black;
    padding: 0.6rem;
    margin: 0.6rem 0;
    border-radius: 0.3rem;
    background-color: blanchedalmond;
    transition: all .12s;
    &:hover{
      transform: scale(1.06);
    }
  }
</style>