<template>
  <section class="section">
    <div class="container">
      <h2>My favorites</h2>
      <div class="mt">
        <p v-if="places == ''">お気に入りが登録されていません。登録しているのに表示されない場合はリロードしてみてください。</p>
        <div v-for="place in places" v-bind:key="place.id">
          <Place :place="place" page="top" />
        </div>
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
      return this.$store.getters.getFavoritePlaces
    }
  },
  async fetch({ store, query }) {
    let getLineIDToken = store.getters.getLineIDToken
    
    if (getLineIDToken == '') {
      return
    }

    const payload = {
      uri: ROUTES.POST.GET_FAVORITE,
      params: {
        line_id_token: getLineIDToken
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

<style scoped>
.mt {
  margin-top: 0.5rem;
}
</style>