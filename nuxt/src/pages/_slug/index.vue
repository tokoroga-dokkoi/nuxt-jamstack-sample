<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="body" v-html="body" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  async asyncData({ $axios, params }) {
    const url = `${process.env.MICRO_CMS_BASE_URL}/news/${params.slug}`
    const { data } = await $axios.get(url, {
      headers: {
        'X-API-KEY': process.env.MICRO_CMS_API_KEY,
      },
    })
    return data
  },
})
</script>
