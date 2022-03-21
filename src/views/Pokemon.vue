<template>
<PokemonList :pokemon="pokemon"  />
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
      return this.$root.$data.pokemon.filter(pokemon => pokemon.country === this.country);
    }
  },
  methods: {
    select(region) {
      this.region = region;
    }
  }
}
</script>


<script>
import PokemonList from "../components/PokemonList.vue"
export default {
  name: 'HomeView',
  components: {
    PokemonList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
  pokemon() {
    return this.$root.$data.pokemon.filter(pokemon => pokemon.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>s
