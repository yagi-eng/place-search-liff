<template>
  <v-card class="mx-auto mt" max-width="400">
    <v-img height="200px" :src="place.PhotoURL"></v-img>

    <v-card-subtitle>{{ place.Name }}</v-card-subtitle>

    <v-card-text class="text--primary">{{ place.Address }}</v-card-text>

    <v-card-actions>
      <v-btn color="primary" link nuxt :href="place.URL">Open Google Map</v-btn>
      <div class="ml">
        <v-btn v-if="page == 'search'" @click.prevent="addFavoritePlace">Add to my favorites</v-btn>
        <v-btn v-if="page == 'top'" @click.prevent="removeFavoritePlace">Remove</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
import ROUTES from "~/routes/api";

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
    async addFavoritePlace() {
      let getLineIDToken = this.$store.getters.getLineIDToken

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
      await this.$store.dispatch("addFavoritePlace", payload)
    },
    async removeFavoritePlace() {
      let getLineIDToken = this.$store.getters.getLineIDToken

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
      await this.$store.dispatch("removeFavoritePlace", payload)
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