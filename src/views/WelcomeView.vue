<template>
        <img
          v-for="url in kittens"
          @click="selectKitten(url)"
          :src="url"
          :key="url"
          class="p-m-2"
        />
  </div>
      <div class="p-field">
        <label for="name" class="p-mr-3 p-my-5">Kitten's Name:</label>
        <InputText
          :modelValue="kittenName"
          @input="
            (e) =>
              updateKittenInfo({ field: 'kittenName', value: e.target.value })
          "
          id="name"
          type="username"
          aria-describedby="name-help"
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
