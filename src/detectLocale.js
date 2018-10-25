import { currentGlobal } from "./global"

export function normalizeLocaleParts(locale) {
  return locale
    .split("-")
    .map((localePart) => localePart.toLowerCase())
    .join("-")
}

export function expandLocale(locale) {
  if (!locale) {
    return []
  }

  const start = locale.split("-")
  const result = []

  while (start.length > 0) {
    result.push(start.join("-"))
    start.pop()
  }

  return result
}

export function detectBrowserLocale(navigator = currentGlobal.navigator) {
  const locales = (navigator.languages || [ navigator.language ]).map((locale) =>
    normalizeLocaleParts(locale)
  )

  return locales.map((locale) => expandLocale(locale)).reduce((prev, localeArray) => {
    return prev.concat(localeArray)
  }, [])
}
