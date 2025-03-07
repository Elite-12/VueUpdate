import { createVuetify } from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import * as components from 'vuetify/components'
import { VTreeview } from 'vuetify/labs/VTreeview'
import * as directives from 'vuetify/directives'
import { aliases, md } from 'vuetify/iconsets/md'

// store
import { store } from '../store/store'

import 'vuetify/styles'

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
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})
