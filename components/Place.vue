<template>
  <v-card class="mx-auto mt" max-width="400">
    <v-img height="200px" :src="place.PhotoURL"></v-img>

    <v-card-subtitle>{{ place.Name }}</v-card-subtitle>

    <v-card-text class="text--primary">{{ place.Address }}</v-card-text>

    <v-card-actions>
      <v-btn color="primary" link nuxt :href="place.URL">Open Google Map</v-btn>
      <div class="ml">
        <v-btn v-if="page == 'search'" @click.prevent="addFavorite">Add to my favorites</v-btn>
        <v-btn v-if="page == 'top'" @click.prevent="toggleFavorite">Remove</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    place: {
      type: Object
    },
    page: {
      type: String
    }
  },
  methods: {
    async addFavorite() {
      let getLineIDToken = store.getters.getLineIDToken

      if (getLineIDToken == "") {
        return
      }

      const payload = {
        uri: ROUTES.POST.ADD_FAVORITE,
        params: {
          line_id_token: getLineIDToken,
          place_id: this.place.PlaceID
        }
      }
      await store.dispatch("addFavorite", payload)
    },
    async removeFavorite() {
      let getLineIDToken = store.getters.getLineIDToken

      if (getLineIDToken == "") {
        return
      }

      const payload = {
        uri: ROUTES.POST.REMOVE_FAVORITE,
        params: {
          line_id_token: getLineIDToken,
          place_id: this.place.PlaceID
        }
      }
      await store.dispatch("removeFavorite", payload)
    }
  }
};
</script>

<style scoped>
.mt {
  margin-bottom: 1.25rem;
}

.ml {
  margin-left: 0.5rem;
}

.primary {
  background-color: #1976d2 !important;
  border-color: #1976d2 !important;
}
</style>