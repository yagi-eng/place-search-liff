<template>
  <div>
    <p>{{ place.Name }}</p>
    <p>{{ place.PlaceID }}</p>
    <p>{{ place.Address }}</p>
    <p>{{ place.PhotoURL }}</p>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: Object
    }
  }
};
</script>