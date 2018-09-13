<template>
  <div class="app">
    <a class="scrollup"></a>
    <div :class="[{ flexStart: step == 1 }, 'wrapper' ]">
      <transition name="slide">
        <div onclick="location.reload()" class="logo" v-if="step == 1">IN THE SKY</div>
      </transition>
      <transition name="fade">
        <Space v-if="step == 0" />
      </transition>
      <Claim v-if="step == 0" />
      <SearchInput v-scroll-reveal v-model="searchValue" @input="handleInput" :dark="step == 1" />
      <div class="results" v-if="results && !loading && step == 1">
        <Item v-for="item in results" :item="item" :key="item.data[0].nasa_id" @click.native="handleModalOpen(item)" />
      </div>
      <div class="loader" v-if="step == 1 && loading" />
      <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" />
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import debounce from 'lodash.debounce';
  import Space from '@/components/Space.vue';
  import Claim from '@/components/Claim.vue';
  import Item from '@/components/Item.vue';
  import Modal from '@/components/Modal.vue';
  import SearchInput from '@/components/SearchInput.vue';
  const API = 'https://images-api.nasa.gov/search';
  export default {
    name: 'Search',
    components: {
      Claim,
      SearchInput,
      Space,
      Item,
      Modal,
    },
    data() {
      return {
        modalItem: null,
        modalOpen: false,
        loading: false,
        step: 0,
        searchValue: '',
        results: [],
      };
    },
    methods: {
      handleModalOpen(item) {
        this.modalOpen = true;
        this.modalItem = item;
      },
      // eslint-disable-next-line
      handleInput: debounce(function() {
        this.loading = true;
        axios.get(`${API}?q=${this.searchValue}&media_type=image`)
          .then((response) => {
            this.results = response.data.collection.items;
            this.loading = false;
            this.step = 1;
          })
          .catch((error) => {
            console.log(error);
          });
      }, 500),
    },
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');

  *
  {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body
  {
    scroll-behavior:smooth;
    font-family: Montserrat, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url(assets/bg.png);
  }

  .fade-enter-active, .fade-leave-active
  {
    transition: opacity .3s ease;
  }

  .fade-enter, .fade-leave-to
  {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active
  {
    transition: margin-top .3s ease;
  }

  .slide-enter, .slide-leave-to
  {
    margin-top: -50px;
  }

  .wrapper {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .flexStart
  {
    justify-content: flex-start;
  }

  .logo
  {
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 5px;
    cursor: pointer;
  }

  .results
  {
    margin-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .loader {
    margin-top: 100px;
    display: inline-block;
    width: 64px;
    height: 64px;

    @media (min-width: 768px)
    {
      width: 90px;
      height: 90px;
    }
  }
  .loader:after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #1e3d4a;
    border-color: #1e3d4a transparent #1e3d4a transparent;
    animation: loading 1.2s linear infinite;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  @media (min-width: 768px)
  {
    .results
    {
      width: 90%;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  /*JS script ScrollTo*/
  .scrollup
  {
    width: 64px;
    height: 64px;
    text-decoration: none;
    background: url("assets/up.png") no-repeat 0px 0px;
    position: fixed;
    right: 50px;
    bottom: 50px;
    display: none;
    z-index: 1;
    cursor: pointer;
  }

  .scrollup:hover
  {
    background-color: #F6F6F6;
  }
</style>
