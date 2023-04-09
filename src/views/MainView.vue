<template>
  <div class="main-page p-d-flex p-flex-column p-jc-center p-ai-center">
    <h1>KitKat</h1>
    <p>Purrs: {{ purrs }}</p>
    <div @click="incrementPurrs" class="cat-circle"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      purrs: 0,
    };
  },
  methods: {
    incrementPurrs() {
      this.purrs++;
    },
  },
};
</script>

<style scoped lang="sass">
.cat-circle
  width: 300px
  height: 300px
  border-radius: 50%
  border: 2px solid black
  background-color: #efe92e
</style>
