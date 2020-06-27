<template>
  <section class="section">
    <div class="container">
      <div class="mt">
        <nuxt-link to="/">お気に入り一覧へ</nuxt-link>
      </div>
      <div v-for="place in places" v-bind:key="place.id">
        <Place :place="place" page="search" />
      </div>
      <div class="mt">
        <nuxt-link to="/">お気に入り一覧へ</nuxt-link>
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
      return this.$store.getters.getSearchPlaces
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
      return
    }
    await store.dispatch("searchPlaces", payload)
  }
};
</script>

<style scoped>
.mt {
  margin-bottom: 1.25rem;
}
</style>