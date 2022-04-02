<template>
<div class="Pokemon">
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Fire')" href="#" class="pure-menu-link">Fire</a></li>
      <li class="pure-menu-item"><a @click="select('Leaf')" href="#" class="pure-menu-link">Leaf</a></li>
      <li class="pure-menu-item"><a @click="select('Water')" href="#" class="pure-menu-link">Water</a></li>
      <li class="pure-menu-item"><a @click="select('Bug')" href="#" class="pure-menu-link">Bug</a></li>
    </ul>
  </div>
  <PokemonList :pokemons="pokemons" />
</div>
</template>

<script>
import PokemonList from "../components/PokemonList"

export default {
  name: 'PokemonVue',
  components: {
    PokemonList
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    pokemons() {
      return this.$root.$data.pokemons.filter(pokemon => pokemon.type === this.type);
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>
