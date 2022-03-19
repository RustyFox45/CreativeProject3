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
      return this.$root.$data.products.filter(product => product.country === this.country);
    }
  },
  methods: {
    select(region) {
      this.region = region;
    }
  }
}
</script>
