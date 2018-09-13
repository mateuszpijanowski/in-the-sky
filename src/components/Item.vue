<template>
  <div v-scroll-reveal.reset :style="style" class="item" />
</template>

<script>
  export default {
    name: 'Item',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        photo: this.item.links[0].href,
        title: this.item.data[0].title,
      };
    },
    computed: {
      style() {
        return `background-image: url("${this.photo}")`;
      },
    },
  };
</script>

<style>
  .item
  {
    width: 40vw;
    height: 250px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;
    border: 2px solid #1e3d4a;
    opacity: 0.9;
  }

  .item:hover
  {
    opacity: 1;
  }

  @media (min-width: 768px)
  {
    .item
    {
      width: 25vw;
    }
  }
</style>
