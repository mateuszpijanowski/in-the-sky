<template>
  <div v-scroll-reveal class="outerWrapper">
    <div class="innerWrapper">
      <div class="photo">
        <img :src="photo" />
      </div>
      <div class="description">
        <h2 class="title">{{ title }}</h2>
        <p class="description" v-html="description" />
      </div>
    </div>
    <div class="close" @click="$emit('closeModal')" />
  </div>
</template>

<script>

  export default {
    name: 'Modal',
    props: {
      item: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        photo: null,
        title: null,
        description: null,
      };
    },
    mounted() {
      this.photo = this.item.links[0].href;
      this.title = this.item.data[0].title;
      this.description = this.item.data[0].description;
    },
  };
</script>

<style lang="scss">
  .outerWrapper
  {
    background-color: #F6F6F6;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    overflow: auto;

    @media (min-width: 1024px)
    {
      max-width: 90%;
      max-height: 80%;
      min-height: 504px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 50px 50px -10px rgba(0, 0, 0, .6);
    }
  }

  .innerWrapper
  {
    display: block;
    padding: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;

    @media (min-width: 1024px)
    {
      flex-direction: row;

      .photo
      {
        margin-right: 20px;
      }

      img {
        padding-right: 20px;
        padding-bottom: 20px;
        width: auto !important;
        height: auto !important;
        float: left !important;
      }
    }

    .photo
    {
      width: auto;
      height: auto;

      img
      {
        width: 100%;
      }
    }

    .description
    {
      text-align: justify;
      color: #333;
    }

    .title
    {
      text-align: left;
      color: #1e3d4a;
    }
  }

  .close
  {
    position: fixed;
    width: 30px;
    height: 30px;
    padding: 30px;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before,
    &:after
    {
      position: fixed;
      top: 30px;
      right: 20px;
      content: '';
      width: 20px;
      height: 2px;
      background: black;
      display: block;
    }

    &::before
    {
      transform: rotate(45deg);
    }

    &::after
    {
      transform: rotate(-45deg);
    }
  }
</style>
