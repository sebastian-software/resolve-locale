import {
  detectBrowserLocale,
  expandLocale,
  expandLocales,
  normalizeLocaleParts
} from "./detectLocale"

describe("normalize locale part to lower case", () => {
  test("simple locale", () => {
    const value = "pt"
    const expected = "pt"

    const result = normalizeLocaleParts(value)

    expect(result).toBe(expected)
  })

  test("simple locale uppercase", () => {
    const value = "PT"
    const expected = "pt"

    const result = normalizeLocaleParts(value)

    expect(result).toBe(expected)
  })

  test("country specific locale", () => {
    const value = "de-DE"
    const expected = "de-de"

    const result = normalizeLocaleParts(value)

    expect(result).toBe(expected)
  })

  test("country specific locale with specific writing", () => {
    const value = "zh-Hant-CN"
    const expected = "zh-hant-cn"

    const result = normalizeLocaleParts(value)

    expect(result).toBe(expected)
  })
})

describe("expand locale", () => {
  test("expand main language", () => {
    const value = "en"
    const expected = [ "en" ]

    const result = expandLocale(value)

    expect(result).toEqual(expected)
  })

  test("expand country specific locale", () => {
    const value = "de-de"
    const expected = [ "de-de", "de" ]

    const result = expandLocale(value)

    expect(result).toEqual(expected)
  })

  test("expand long locale with two private fields", () => {
    const value = "zh-Hant-CN-x-private1-private2"
    const expected = [
      "zh-Hant-CN-x-private1-private2",
      "zh-Hant-CN-x-private1",
      "zh-Hant-CN-x",
      "zh-Hant-CN",
      "zh-Hant",
      "zh"
    ]

    const result = expandLocale(value)

    expect(result).toEqual(expected)
  })

  test("undefined locale", () => {
    const value = undefined
    const expected = []

    const result = expandLocale(value)

    expect(result).toEqual(expected)
  })

  test("empty locale", () => {
    const value = ""
    const expected = []

    const result = expandLocale(value)

    expect(result).toEqual(expected)
  })

  test("expand locales", () => {
    const value = [ "de-de", "pt-pt" ]
    const expected = [ "de-de", "de", "pt-pt", "pt" ]

    const result = expandLocales(value)

    expect(result).toEqual(expected)
  })
})

describe("get browser locales", () => {
  test("all given locales are resolved", () => {
    const languages = [ "pt-PT", "de-DE", "en" ]
    const fakeNavigator = {
      languages
    }

    const result = detectBrowserLocale(fakeNavigator)

    expect(result).toContain("pt-pt")
    expect(result).toContain("de-de")
    expect(result).toContain("en")
  })

  test("locales are expanded", () => {
    const languages = [ "pt-PT", "de-DE", "en" ]
    const fakeNavigator = {
      languages
    }

    const result = detectBrowserLocale(fakeNavigator)

    expect(result).toContain("pt")
    expect(result).toContain("de")
  })

  test("specificity in locales wins", () => {
    const languages = [ "pt-PT", "de-DE", "en" ]
    const expected = [ "pt-pt", "pt", "de-de", "de", "en" ]
    const fakeNavigator = {
      languages
    }

    const result = detectBrowserLocale(fakeNavigator)

    expect(result).toEqual(expected)
  })
})
