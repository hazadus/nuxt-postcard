import { ru } from '@formkit/i18n'
import { genesisIcons } from "@formkit/icons"
import { defineFormKitConfig } from '@formkit/vue'
import { rootClasses } from "./formkit.theme"

export default defineFormKitConfig(() => ({
  icons: { ...genesisIcons },
  config: { rootClasses },
  locales: { ru },
  locale: 'ru'
}))
