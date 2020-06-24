<template>
  <section class="section">
    <div class="container">
      <div v-for="place in places" v-bind:key="place.id">
        <Place :place="place" />
      </div>
    </div>
  </section>
</template>

<script>
import ROUTES from "~/routes/api";
import Place from "~/components/Place";

export default {
  components: {
    Place
  },
  computed: {
    places() {
      return this.$store.getters.getFavoritePlaces;
    }
  },
  async fetch({ store, query }) {
    const payload = {
      uri: ROUTES.POST.GET_FAVORITE,
      params: {
        line_user_id: '1'
      }
    }
    if (
      store.getters.getFavoritePlaces &&
      store.getters.getFavoritePlaces.length > 0
    ) {
      return
    }
    await store.dispatch("getFavoritePlaces", payload)
  }
};
</script>