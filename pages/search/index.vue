<template>
  <section class="section">
    <div class="container">
      <nuxt-link to="/">お気に入り一覧へ</nuxt-link>
      <div v-for="place in places" v-bind:key="place.id">
        <p>{{ place.Name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import ROUTES from "~/routes/api";

export default {
  computed: {
    places() {
      return this.$store.getters.getSearchPlaces;
    }
  },
  async fetch({ store, query }) {
    const q = encodeURIComponent(query.q) || "";
    const payload = {
      uri: ROUTES.GET.SEARCH,
      params: {
        q
      }
    };
    if (
      store.getters.getSearchPlaces &&
      store.getters.getSearchPlaces.length > 0
    ) {
      return;
    }
    await store.dispatch("searchPlaces", payload);
  }
};
</script>