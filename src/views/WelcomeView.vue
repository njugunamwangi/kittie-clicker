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
  components: {},
};
</script>
