import { resolveLocale } from "./resolveLocale"

describe("resolve locales", () => {
  test("simple locale", () => {
    const browserLocales = [ "pt-pt", "pt", "de-de", "de", "en-gb", "en" ]
    const supportedLocales = [ "de-de", "en-gb" ]
    const expected = "de-de"

    const result = resolveLocale(browserLocales, supportedLocales)

    expect(result).toBe(expected)
  })

  test("simple second locale", () => {
    const browserLocales = [ "pt-pt", "pt", "de-de", "de", "en-gb", "en" ]
    const supportedLocales = [ "no", "en-gb" ]
    const expected = "en-gb"

    const result = resolveLocale(browserLocales, supportedLocales)

    expect(result).toBe(expected)
  })

  test("unspecific locale", () => {
    const browserLocales = [ "pt-pt", "de-de", "en-gb", "en" ]
    const supportedLocales = [ "pt-BR" ]
    const expected = "pt"

    const result = resolveLocale(browserLocales, supportedLocales)

    expect(result).toBe(expected)
  })

  test("no matching locale", () => {
    const browserLocales = [ "pt-pt", "pt", "de-de", "de" ]
    const supportedLocales = [ "en", "en-gb" ]
    const expected = null

    const result = resolveLocale(browserLocales, supportedLocales)

    expect(result).toBe(expected)
  })
})

describe("preferred locale", () => {
  test("available preferred locale", () => {
    const browserLocales = []
    const supportedLocales = [ "en", "en-gb", "de-de", "de" ]
    const preferredLocale = "de-de"
    const expected = preferredLocale

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })

  test("available unspecific preferred locale", () => {
    const browserLocales = []
    const supportedLocales = [ "en-gb", "de-de" ]
    const preferredLocale = "de"
    const expected = "de-de"

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })

  test("available unspecific supported locale", () => {
    const browserLocales = []
    const supportedLocales = [ "en", "de" ]
    const preferredLocale = "de-de"
    const expected = "de"

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })

  test("available specific (non matching) supported locale", () => {
    const browserLocales = []
    const supportedLocales = [ "de-at" ]
    const preferredLocale = "de-de"
    const expected = "de-at"

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })

  test("unavailable preferred locale but matching browser locale", () => {
    const browserLocales = [ "de-de" ]
    const supportedLocales = [ "de" ]
    const preferredLocale = "pt-pt"

    const expected = "de"

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })

  test("available preferred locale and matching browser locale", () => {
    const browserLocales = [ "de-de" ]
    const supportedLocales = [ "de", "en" ]
    const preferredLocale = "en-gb"

    const expected = "en"

    const result = resolveLocale(browserLocales, supportedLocales, preferredLocale)

    expect(result).toBe(expected)
  })
})
