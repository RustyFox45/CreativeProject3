<template>
  <div class="Pokemon">
    <PokemonListByType :pokemons=this.$root.$data.pokemons />
  </div>
</template>

<script>
import PokemonListByType from "../components/PokemonListByType"

export default {
  name: 'PokemonView',
  components: {
    PokemonListByType
  },
}
</script>
