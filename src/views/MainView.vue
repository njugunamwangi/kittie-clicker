<template>
  <div class="main-page p-d-flex p-flex-column p-jc-center p-ai-center">
    <h1>{{ kittenName }}</h1>
    <p>Purrs: {{ purrs }}</p>
    <img @click="incrementPurrs" :src="kittenUrl" class="cat-circle" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MainView",
  data: function () {
    return {
      purrs: 0,
    };
  },
  computed: {
    ...mapState(["kittenName", "kittenUrl"]),
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
