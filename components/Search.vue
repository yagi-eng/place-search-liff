<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="9" md="6">
          <v-text-field v-model="q" :rules="searchRules" label="search" name="q" required></v-text-field>
        </v-col>
        <v-col cols="3" md="1">
          <v-app>
            <v-btn outlined color="primary">Go</v-btn>
          </v-app>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    q: "",
    searchRules: [v => !!v || "required"]
  })
};
</script>