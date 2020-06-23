<template>
  <v-form action="/search" method="get">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field label="search" name="q" required></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>