<template>
  <div class="SpaceImage" />
</template>

<script>
  export default {
    name: "Space"
  }
</script>

<style lang="scss">
  .SpaceImage
  {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
    height: 100vh;
    background-image: url('../assets/galaxy.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 0%;
  }

  .SpaceImage::after
  {
    background-color: rgba(0, 0, 0, 0.8);
    content: '';
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100vh;
  }
</style>
