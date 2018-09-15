<template>
    <input
      id="search"
      name="search"
      :class=" { dark: dark } "
      :value="value"
      @input="handleChange"
    />
</template>

<script>
  export default {
    name: 'SearchInput',
    props: {
      value: {
        type: String,
        required: true,
      },

      dark: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleChange(e) {
        this.$emit('input', e.target.value);
      },
    },
  };
</script>

<style>
  input
  {
    margin-top: 50px;
    display: flex;
    width: 250px;
    font-size: 18px;
    background: none;
    text-align: center;
    font-weight: 400;
    color: white;
    background: none;
    height: 30px;
    border: 0;
    border-bottom: 1px solid white;
    transition: box-shadow .3s ease-out;
  }

  input:focus
  {
    outline: none;
    box-shadow: 0 10px 20px -12px rgba(255, 255, 255, 5.0);
  }

  .dark
  {
    color: #1e3d4a;
    border-bottom-color: #1e3d4a;
  }

  .dark:focus
  {
    box-shadow: 0 10px 20px -12px rgba(#1e3d4a, 5.0);
  }

  @media (min-width: 1024px)
  {
    input
    {
      font-weight: 800;
      font-size: 21px;
    }
  }

  @media (min-width: 768px)
  {
    input
    {
      font-size: 19px;
      font-weight: 600;
    }
  }
</style>
