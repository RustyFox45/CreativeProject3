<template>
<div>
  <FavoritesList :favorites="favorites" />
</div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
export default {
  name: 'FavoritesView',
  components: {
    FavoritesList
  },
  data() {
    return {}
  },
  computed: {
    Favorites() {
    // TODO: Make this work!
      return this.$root.$data.cart;
    }
  },
}
</script>
