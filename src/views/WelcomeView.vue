<template>
        <img
          v-for="url in kittens"
          @click="selectKitten(url)"
          :src="url"
          :key="url"
          class="p-m-2"
        />
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  components: {
    Button,
    InputText,
  },
};
</script>

<style scoped lang="sass">
.p-inputtext
  border: 1px solid black
  width: 300px
</style>
