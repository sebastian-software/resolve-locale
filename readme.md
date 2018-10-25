# _resolve-locale_ <br/>[![Sponsored by][sponsor-img]][sponsor] [![Version][npm-version-img]][npm] [![Downloads][npm-downloads-img]][npm] [![Build Status Unix][travis-img]][travis] [![Build Status Windows][appveyor-img]][appveyor] [![Code Coverage][codecov-img]][codecov] [![Dependencies][deps-img]][deps]

> _resolve-locale_ - Resolve locale settings between browser default, supported locales and preferred locale

[sponsor-img]: https://img.shields.io/badge/Sponsored%20by-Sebastian%20Software-692446.svg
[sponsor]: https://www.sebastian-software.de
[deps]: https://david-dm.org/sebastian-software/resolve-locale
[deps-img]: https://david-dm.org/sebastian-software/resolve-locale.svg
[npm]: https://www.npmjs.com/package/resolve-locale
[npm-downloads-img]: https://img.shields.io/npm/dm/resolve-locale.svg
[npm-version-img]: https://img.shields.io/npm/v/resolve-locale.svg
[travis-img]: https://img.shields.io/travis/sebastian-software/resolve-locale/master.svg?branch=master&label=unix%20build
[appveyor-img]: https://img.shields.io/appveyor/ci/fastner/resolve-locale/master.svg?label=windows%20build
[travis]: https://travis-ci.org/sebastian-software/resolve-locale
[appveyor]: https://ci.appveyor.com/project/fastner/resolve-locale/branch/master
[codecov-img]: https://img.shields.io/codecov/c/github/sebastian-software/resolve-locale.svg
[codecov]: https://codecov.io/gh/sebastian-software/resolve-locale

## Getting started

Install _resolve-locale_ via

`npm install resolve-locale`

Then add it to your browser source

```javascript
import { detectBrowserLocale, resolveLocale } from "resolve-locale"

const localesLoader = {
  "de": () => import("./locale/de"),
  "pt-pt": () => import("./locale/pt-pt"),
  "zh-hant-cn": () => import("./locale/zh-Hant-CN")
}
const availableLoaders = Object.keys(localesLoader)
const storedLocale = localStorage.getItem("locale")

const browserLocales = detectBrowserLocale()
const locale = resolveLocale(browserLocales, availableLoaders, storedLocale)

localesLoader[locale]().then(() => {
  ... main app
})
```

## API

`<array<string>> detectBrowserLocale([navigator])`

Detect browsers locales as array sorted by preference. Locales are expanded.
`["de-de","en"]` will expand to `["de-de", "de", "en"]`.

## License

[Apache License; Version 2.0, January 2004](http://www.apache.org/licenses/LICENSE-2.0)

## Copyright

<img src="https://cdn.rawgit.com/sebastian-software/sebastian-software-brand/0d4ec9d6/sebastiansoftware-en.svg" alt="Logo of Sebastian Software GmbH, Mainz, Germany" width="460" height="160"/>

Copyright 2016-2018<br/>[Sebastian Software GmbH](http://www.sebastian-software.de)
