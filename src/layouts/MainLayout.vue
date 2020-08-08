<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn-dropdown flat round dense icon="menu" class="dropdown-menu q-mr-sm">
          <q-list>
            <q-item to="standings">
              <q-item-label>Standings</q-item-label>
            </q-item>
            <q-item to="matchupmatrix">
              <q-item-label>Matchup Matrix</q-item-label>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-toolbar-title>
          <q-btn flat type="a"
          href="/"
          clickable
          label="Historical Standard" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
    }
  },
  meta: {
    title: 'Historical Standard'
  }
}
</script>
