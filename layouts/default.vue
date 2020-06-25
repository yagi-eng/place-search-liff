<template>
  <div>
    <Search />
    <nuxt />
  </div>
</template>

<script>
import Search from "~/components/Search";
export default {
  components: {
    Search
  },
  mounted() {
    // LIFFの初期化
    // liff
    //   .init({
    //     liffId: process.env.LIFF_ID
    //   })
    //   .then(() => {
    //     console.log(liff.getIDToken())
    //     // Webブラウザからアクセスされた場合は、LINEにログインする
    //     if (!liff.isInClient() && !liff.isLoggedIn()) {
    //       window.alert("LINEアカウントにログインしてください。")
    //       liff.login({ redirectUri: location.href })
    //     }
    //   })
    //   .catch(err => {
    //     console.log("LIFF Initialization failed ", err)
    //   })
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
