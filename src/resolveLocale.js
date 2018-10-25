import { expandLocale, expandLocales } from "./detectLocale"
import { jointArray } from "./util"

export function resolveLocale(browserLocales, supportedLocales, preferredLocale) {
  const expandedSupportedLocales = expandLocales(supportedLocales)
  const expandedPreferredLocale = expandLocale(preferredLocale)

  const preferredSupportedLocales = jointArray(
    expandedSupportedLocales,
    expandedPreferredLocale
  )
  if (preferredSupportedLocales.length > 0) {
    // Exact match of supported locales
    if (supportedLocales.includes(preferredLocale)) {
      return preferredLocale
    }

    // Find best match of supported locales
    return supportedLocales.find(
      (supportedLocale) =>
        preferredSupportedLocales.filter((preferredLocale) =>
          supportedLocale.startsWith(preferredLocale)
        ).length > 0
    )
  }

  const expandedBrowserLocales = expandLocales(browserLocales)

  const findExactMatch = expandedSupportedLocales.find((item) =>
    expandedBrowserLocales.includes(item)
  )
  if (findExactMatch) {
    return findExactMatch
  }

  return null
}
