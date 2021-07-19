<template>
  <div>
    <nuxt-content :document="index" />
    <team-list :members="members"></team-list>
  </div>
</template>

<script>
import TeamList from '~/components/TeamList.vue'
import { generateMetatags } from '~/util/generateHeaderInformation'

export default {
  components: { TeamList },
  async asyncData({ $content }) {
    const index = await $content('team').fetch()
    return { index }
  },
  head() {
    const metatags = generateMetatags(
      this.index.title,
      this.index.description,
      this.$route.fullPath
    )
    return { title: this.index.title, meta: metatags }
  },
  computed: {
    members() {
      return [
        this.index?.member1,
        this.index?.member2,
        this.index?.member3,
        this.index?.member4,
        this.index?.member5,
        this.index?.member6,
        this.index?.member7,
        this.index?.member8,
        this.index?.member9,
        this.index?.member10,
        this.index?.member11,
        this.index?.member12,
        this.index?.member13,
        this.index?.member14,
        this.index?.member15,
      ].filter((m) => m !== undefined)
    },
  },
}
</script>
