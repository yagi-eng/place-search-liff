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
  data() {
    return {
      idToken: ""
    }
  },
  components: {
    Place
  },
  computed: {
    places() {
      return this.$store.getters.getFavoritePlaces;
    }
  },
  mounted() {
    // LIFFの初期化
    liff
      .init({
        liffId: process.env.LIFF_ID
      })
      .then(() => {
        console.log(liff.getIDToken())
        this.idToken = liff.getIDToken()
        // Webブラウザからアクセスされた場合は、LINEにログインする
        if (!liff.isInClient() && !liff.isLoggedIn()) {
          window.alert("LINEアカウントにログインしてください。")
          liff.login({ redirectUri: location.href })
        }
      })
      .catch(err => {
        console.log("LIFF Initialization failed ", err)
      })
  },
  async fetch({ store, query }) {
    // liff
    //     .init({
    //       liffId: process.env.LIFF_ID
    //     })
    //     .then(() => {
    //       console.log(liff.getIDToken())
    //       // commit('mutateLineIDToken', liff.getIDToken())
    //       idToken = liff.getIDToken()
    //       // Webブラウザからアクセスされた場合は、LINEにログインする
    //       if (!liff.isInClient() && !liff.isLoggedIn()) {
    //         window.alert("LINEアカウントにログインしてください。")
    //         liff.login({ redirectUri: location.href })
    //       }
    //     })
    //     .catch(err => {
    //       console.log("LIFF Initialization failed ", err)
    //     })

    const payload = {
      uri: ROUTES.POST.GET_FAVORITE,
      params: {
        line_id_token: this.idToken
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