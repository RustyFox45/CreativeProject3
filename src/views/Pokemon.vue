<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Kanto')" href="#" class="pure-menu-link">Kanto</a></li>
    </ul>
  </div>
  <PokemonList :pokemons="pokemons"  />
</div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'PokemonVue',
  components: {
    PokemonList
  },
  data() {
    return {
      Region: '',
    }
  },
  computed: {
    pokemon() {
    // TODO: Make this work!
      return this.$root.$data.pokemon.filter(pokemon => pokemon.region === this.region);
    }
  },
  methods: {
    select(region) {
      this.region = region;
    }
  }
}
</script>
