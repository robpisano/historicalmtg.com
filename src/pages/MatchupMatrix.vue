<template>
    <div  style="overflow-y: scroll !important;">
        <q-toolbar class="bg-primary text-white shadow-2">
            <q-toolbar-title>Matchup matrix</q-toolbar-title>
        </q-toolbar>
        <table v-if="loading == false" style="overflow-x: scroll !important; overflow-y: scroll !important;">
          <thead style="position: sticky !important; top: 0;">
            <th></th>
            <th v-for="i in decks.length" :key="i" style="position: sticky; top: 0; z-index: 2;">
              <router-link :to="'deck?id=' + decks[i-1].externalId">
                <q-avatar size="35px">
                  <img :src="'./images/' + decks[i-1].externalId + '.png'" :title="decks[i-1].name">
                </q-avatar>
              </router-link>
            </th>
          </thead>
          <tr v-for="j in decks.length" :key="j">
            <th style="position: sticky !important; left: 0; z-index: 2;">
              <router-link :to="'deck?id=' + decks[j-1].externalId">
                <q-avatar size="35px">
                  <img :src="'./images/' + decks[j-1].externalId + '.png'" :title="decks[j-1].name">
                </q-avatar>
              </router-link>
            </th>
            <td v-for="k in decks.length" :key="k">
              <span v-if="matrix[j-1][k-1] < matrix[k-1][j-1]" style="color: #eb0000;">{{ matrix[j-1][k-1] }} - {{ matrix[k-1][j-1] }}</span>
              <span v-if="matrix[j-1][k-1] > matrix[k-1][j-1]" style="color: #027a00;">{{ matrix[j-1][k-1] }} - {{ matrix[k-1][j-1] }}</span>
              <span v-if="matrix[j-1][k-1] == matrix[k-1][j-1] && (matrix[j-1][k-1] > 0)" style="color: gray;">{{ matrix[j-1][k-1] }} - {{ matrix[k-1][j-1] }}</span>
              <span v-if="j != k && matrix[j-1][k-1] == matrix[k-1][j-1] && (matrix[j-1][k-1] == 0)" style="color: black;">0 - 0</span>
              <span v-if="j == k" style="color: black;">N/A</span>
            </td>
          </tr>
        </table>
        <q-btn color="primary" clickable
          type="a"
          href="standings"
          label="Standings" />
    </div>
</template>

<script>
export default {
  name: 'MatchupMatrix',
  created () {
    this.$axios.get('http://historicmtgapi.herokuapp.com/standingsapi')
      .then(response => {
        console.log(response)
        this.decks = response.data
        console.log('decks = ' + this.decks)
        this.$axios.get('http://historicmtgapi.herokuapp.com/resultsapi')
          .then(resultresponse => {
            for (var i = 0; i < this.decks.length; i++) {
              this.matrix.push([])
              for (var j = 0; j < this.decks.length; j++) {
                this.matrix[i].push(0)
              }
            }
            console.log(this.decks)
            resultresponse.data.forEach(result => {
              const winIndex = this.decks.findIndex(ele => ele.externalId === result.winningDeck)
              const loseIndex = this.decks.findIndex(ele => ele.externalId === result.losingDeck)
              this.matrix[winIndex][loseIndex]++
            })
            console.log(this.matrix)
            console.log(this.decks)
            console.log(this.decks[0])
            console.log(this.matrix[0][0])
            this.gridsize = this.decks.length + 1
            this.loading = false
            this.$forceUpdate()
          })
          .catch(error => {
            console.log(error)
            this.loading = false
          })
      })
      .catch(error => {
        console.log(error)
        this.loading = false
      })
  },
  data () {
    return {
      loading: true,
      decks: [],
      matrix: [[]],
      gridsize: 0
    }
  },
  methods: {
  }
}
</script>
<style scoped>
table {
  border-spacing: 0;
  z-index: 1;
}
td {
  position: relative;
}
thead {
  position: sticky !important;
}
tr:hover td {
  background-color:#96e8ff;
}
td:hover::after {
  background-color:#96e8ff;
  content: '\00a0';
  height: 10000px;
  top: -5000px;
  left: -3px;
  position: absolute;
  z-index: -1;
  width: 100%;
}
span {
  cursor:default;
}
</style>
