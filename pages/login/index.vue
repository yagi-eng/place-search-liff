<template>
</template>

<script>
import Search from "~/components/Search";
export default {
  components: {
    Search
  },
  mounted() {
    this.$store.dispatch("login");
  }
};
</script>