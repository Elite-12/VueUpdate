import { createVuetify } from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import * as components from 'vuetify/components'
import { VTreeview } from 'vuetify/labs/VTreeview'
import * as directives from 'vuetify/directives'
import { aliases as mdAliases, md } from 'vuetify/iconsets/md'
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi'

// store
import { store } from '../store/store'

import 'vuetify/styles'
// import '@/assets/scss/_style.scss'
// import '@/assets/scss/_mixin.scss'


import '../assets/scss/_style.scss'

export default createVuetify({
  components: {
    ...components,
    VTreeview,
  },
  directives,
  theme: {
    themes: {
      light: store.getters.selectedTheme.theme,
      dark: store.getters.selectedTheme.theme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    
    aliases: { ...mdAliases, ...mdiAliases },
    sets: { md, mdi },
  },
})
