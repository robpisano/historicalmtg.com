<template>
  <q-page>
    <div class="row justify-end">
      <div class="col-5">
        <Introduction/>
      </div>
      <div class="col-3">
        <Top10Decks/>
      </div>
      <div class="col-4">
        <RecentResults/>
      </div>
    </div>
  </q-page>
</template>

<script>
import Top10Decks from 'components/Top10Decks.vue'
import RecentResults from 'components/RecentResults.vue'
import Introduction from 'components/Introduction.vue'

export default {
  name: 'PageIndex',
  components: { Top10Decks, RecentResults, Introduction },
  data () {
    return {
    }
  }
}
</script>
