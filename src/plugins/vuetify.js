import { createVuetify } from 'vuetify'

import * as components from 'vuetify/components'
import { VTreeview } from 'vuetify/labs/VTreeview'
import * as directives from 'vuetify/directives'
import { aliases as mdAliases, md } from 'vuetify/iconsets/md'
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi'

import 'vuetify/styles'
// import 'vuetify/dist/vuetify.min.css'

// store
import { store } from '../store/store'

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
