<template>
  <div>
    <repositories-filters />
    <repositories-list />
    <repositories-sort-by />
  </div>
</template>

<script>
import repositoriesFilters from './repositoriesFilters.vue'
import repositoriesList from './repositoriesList.vue'
import repositoriesSortBy from './repositoriesSortBy.vue'

export default {
  name: 'introduction',
  components: { repositoriesFilters, repositoriesList, repositoriesSortBy },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      repositories: [],
      filters: {},
      searchQuery: ''
    }
  },
  computed: {

  }
}
</script>