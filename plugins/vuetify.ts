import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const basicTypographyColor = colors.grey.darken3

const customTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.blue.base,
    'on-surface': basicTypographyColor,
    'on-background': basicTypographyColor
    // 後は必要に応じて
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
