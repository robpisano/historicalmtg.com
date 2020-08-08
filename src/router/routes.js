
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'standings', component: () => import('pages/Standings.vue') },
      { path: 'matchupmatrix', component: () => import('pages/MatchupMatrix.vue') },
      { path: 'deck', component: () => import('pages/Deck.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
