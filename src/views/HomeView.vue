<template>
  <div class="home">
    <PokemonList :pokemons=this.$root.$data.pokemons />
  </div>
</template>

<script>
import PokemonList from "../components/PokemonList"

export default {
  name: 'HomeView',
  components: {
    PokemonList
  },
}
</script>
