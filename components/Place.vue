<template>
  <v-card class="mx-auto mt" max-width="400">
    <v-img height="200px" :src="place.PhotoURL"></v-img>

    <v-card-subtitle>{{ place.Name }}</v-card-subtitle>

    <v-card-text class="text--primary">{{ place.Address }}</v-card-text>

    <v-card-actions>
      <v-btn color="primary" link nuxt :href="place.URL">Open Google Map</v-btn>
      <div class="text-right">
        <v-btn icon>
          <v-icon class="active">mdi-heart</v-icon>
        </v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    place: {
      type: Object
    }
  }
};
</script>

<style scoped>
.mt {
  margin-bottom: 1.25rem;
}

.primary {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}

.text-right {
  margin: 0 0 0 auto;
}

  .active {
    color: #ff1493;
  }
</style>