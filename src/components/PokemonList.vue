template>
    <div>
        <FavoritesList :favorites="favorites" />
    </div>
</template>

<script>
import FavoritesList from "../views/Favorites.vue"
export default {
  name: 'FavoritesView',
  components: {
    FavoritesList
  },
  data() {
    return {
    }
  },
  computed: {
    favorites() {
      return this.$root.$data.favorites;
    }
  },
}
</script>
