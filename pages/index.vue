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
      return this.$store.getters.getFavoritePlaces
    }
  },
  async fetch({ store, query }) {
    let getLineIDToken = store.getters.getLineIDToken
    
    if (getLineIDToken == '') {
      alert('お気に入り登録しているのに表示されない場合はリロードしてみてください')
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