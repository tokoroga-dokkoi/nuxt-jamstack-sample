<template>
  <v-card class="mx-auto" v-bind="$attrs">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate />
    </template>
    <v-img height="250" :src="iCatchUrl" />
    <v-card-text>
      <p class="display-1 text--primary">
        {{ title }}
      </p>
      <div class="post" v-html="description"></div>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import Vue, { PropType } from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    description: {
      type: String as PropType<string>,
      required: true,
    },
    author: {
      type: String as PropType<string>,
      required: true,
    },
    iCatchUrl: {
      type: String as PropType<string>,
      required: true,
    },
  },
})
</script>
<style lang="scss" scoped>
.post {
  & > h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 0 20px;
  }
}
</style>
