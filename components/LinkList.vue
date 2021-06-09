<template>
  <div>
    <link-card
      :card-image="tandemflights.cardImage"
      :card-title="tandemflights.cardTitle"
      :description="tandemflights.description"
      :link-name="tandemflights.linkName"
      :to="tandemflights.to"
    />
    <link-card
      :card-image="basicTrainings.cardImage"
      :card-title="basicTrainings.cardTitle"
      :description="basicTrainings.description"
      :link-name="basicTrainings.linkName"
      :to="basicTrainings.to"
    />
    <link-card
      :card-image="advancedTrainings.cardImage"
      :card-title="advancedTrainings.cardTitle"
      :description="advancedTrainings.description"
      :link-name="advancedTrainings.linkName"
      :to="advancedTrainings.to"
    />
    <link-card
      :card-image="saftyTrainings.cardImage"
      :card-title="saftyTrainings.cardTitle"
      :description="saftyTrainings.description"
      :link-name="saftyTrainings.linkName"
      :to="saftyTrainings.to"
    />
  </div>
</template>

<script>
import LinkCard from './LinkCard.vue'
export default {
  components: { LinkCard },
  props: {
    advancedTrainings: { type: Object, default: () => {} },
    basicTrainings: { type: Object, required: true },
    saftyTrainings: { type: Object, required: true },
    tandemflights: { type: Object, required: true },
    travel: { type: Object, default: () => {} },
  },
}
</script>
