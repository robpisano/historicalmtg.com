<template>
    <div>
        <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Recent Results</q-toolbar-title>
        </q-toolbar>
        <q-list bordered>
          <q-item
              v-ripple
              v-for="result in results"
              :key="result"
          >
              <q-item-section avatar>
                <q-avatar size="50px">
                    <img :src="'./images/' + result.winningDeck + '.png'">
                </q-avatar>
              </q-item-section>
              <q-item-section>{{ result.winningDeck }} def. </q-item-section>
              <q-item-section avatar>
                <q-avatar size="50px">
                    <img :src="'./images/' + result.losingDeck + '.png'">
                </q-avatar>
              </q-item-section>
              <q-item-section>{{ result.losingDeck }} </q-item-section>
              <q-item-section>
                <span v-if="result.was20">2-0</span>
                <span v-if="!result.was20">2-1</span>
              </q-item-section>
              <q-item-section>  {{ moment(result.date).format('MM/DD/YYYY') }}</q-item-section>
          </q-item>
        </q-list>
    </div>
</template>

<script>
export default {
  name: 'RecentResults',
  created () {
    this.$axios.get('http://historicmtgapi.herokuapp.com/resultsapi')
      .then(response => {
        console.log(response)
        this.results = []
        for (var i = 0; i < 10; i++) {
          this.results.push(response.data[i])
        }
        this.loading = false
        console.log('results = ' + this.results)
      })
      .catch(error => {
        console.log(error)
        this.loading = false
      })
  },
  data () {
    return {
      loading: true,
      results: []
    }
  },
  methods: {
  }
}
</script>
