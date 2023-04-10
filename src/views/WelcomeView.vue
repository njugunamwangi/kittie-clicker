<template>
        <img
          v-for="url in kittens"
          @click="selectKitten(url)"
          :src="url"
          :key="url"
          class="p-m-2"
        />
  </div>
      <Button @click="goPlay" label="Go Play" class="p-button-outlined" />
    </div>
</template>

<script>
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { mapMutations, mapState } from "vuex";
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
