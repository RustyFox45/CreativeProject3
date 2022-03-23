<template>
  <div class="favorites">
    <FavoritesList :pokemons=$root.$data.favorites />
  </div>
</template>

<script>
import FavoritesList from "../components/FavoritesList"

export default {
  name: 'FavoritesView',
  components: {
    FavoritesList
  },
}
</script>
