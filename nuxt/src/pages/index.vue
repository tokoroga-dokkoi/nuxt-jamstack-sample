<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <template v-for="content in contents">
        <blog-card
          :key="content.contentId"
          :title="content.title"
          :description="content.body"
          :i-catch-url="content.iCatch.url"
          :author="content.author"
          class="mx-auto my-2"
          max-width="500"
        ></blog-card>
      </template>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import BlogCard from '@/components/atoms/blogCard.vue'
export default Vue.extend({
  components: {
    BlogCard,
  },
  async asyncData({ $axios }) {
    try {
      const url = `${process.env.MICRO_CMS_BASE_URL}/news`
      const { data } = await $axios.get(url, {
        headers: { 'X-API-KEY': process.env.MICRO_CMS_API_KEY },
      })
      console.log(data)
      return { contents: data.contents }
    } catch (error) {
      console.error(error)
      return { contents: [] }
    }
  },
})
</script>
