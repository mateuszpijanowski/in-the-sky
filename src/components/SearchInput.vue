<template>
  <div class="searchWrapper">
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
    />
  </div>
</template>

<script>
  export default {
    name: 'SearchInput',
  };
</script>

<style>
  .searchWrapper
  {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    width: 250px;
  }

  label
  {
    font-family: Montserrat, sans-serif;
  }

  input
  {
    background: none;
    height: 30px;
    border: 0;
    border-bottom: 1px solid black;
  }
</style>
