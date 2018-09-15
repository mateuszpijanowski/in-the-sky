<template>
  <div v-scroll-reveal class="outerWrapper">
    <div class="descriptions">
      <div class="img">
        <img src="icon.png" />
      </div>
      <h2 class="title">What is - In The Sky?</h2>
      <p class="description">
        IDS is the web app created with Vue.js famework and NASA API.
        <br />
        In The Sky is my first project created by Vue.js and API
        technology.
        <br /><br />
        This web was completed through <a class="roman" target="_blank" href="https://www.youtube.com/channel/UCq8XmOMtrUCb8FcFHQEd8_g">Hello Roman</a>
        tutorials!
        <br />
        Thanks!
        <br /><br />
        My other project: <a target="_blank" href="http://mprojectt.com">Mprojectt.com</a>
        <br />
        <a class="copy">&copy by Mateusz Pijanowski</a>
      </p>
    </div>
    <div class="close" @click="$emit('closeAbout')" />
  </div>
</template>

<script>
  export default {
    name: 'About',
  };
</script>

<style lang="scss">
  .outerWrapper {
    background: #f6f6f6;
    max-width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;

    @media (min-width: 1024px) {
      max-width: 70%;
      height: 60%;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      box-shadow: 0 30px 30px -10px rgba(0,0,0, .3);
    }
  }
  .close {
    position: absolute;
    width: 30px;
    height: 30px;
    padding: 30px;
    right: 0;
    top: 0;
    cursor: pointer;

    &::before,
    &::after {
      position: absolute;
      top: 30px;
      right: 20px;
      content: '';
      width: 20px;
      height: 2px;
      background: black;
      display: block;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }

  .img {
    display: flex;
    height: 100%;
    padding: 50px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;

      img {
        min-width: 40%;
      }
    }
    img {
      width: 40%;
      height: auto;
    }
  }

  .descriptions {
    color: #333;
    margin-bottom: 50px;
    text-align: center;
  }

  .title {
     color: #1e3d4a;
  }

  .roman {
    text-decoration: none;
    color: black;
  }

  .copy {
    display: block;
    margin-top: 8px;
    font-size: 13px;
  }
</style>
