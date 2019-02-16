<template>
  <div v-scroll-reveal class="claimWrapper">
    <h1 class="claim">IN THE SKY</h1>
    <p class="subclaim">
      Begin your journey through our amazing galaxy,
      and discover places you never even heard of.
    </p>
    <p class="subclaim">
      Type anything space-related to start.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Claim',
};
</script>

<style>
  .claimWrapper {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .claim {
    font-size: 50px;
    margin: 0;
    letter-spacing: 8px;
    text-shadow: 2px 2px black;
  }

  .subclaim {
    margin: 20px 0 0 0;
    font-size: 13px;
  }

  @media (min-width: 768px)
  {
    .claim
    {
      font-size: 80px;
    }

    .subclaim
    {
      font-size: 17px;
      line-height: 1.2;
      letter-spacing: 1px;
      font-weight: 400;
      width: 500px;
    }
  }

  @media (min-width: 1024px)
  {
    .claim
    {
      font-size: 100px;
    }
  }
</style>
