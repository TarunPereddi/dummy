"use client";
export type CountryCode = keyof typeof countries

export const countries = {
  US: {
    name: "United States",
    code: "US",
    multiplier: 1,
    currency: {
      code: "USD",
      symbol: "$",
    },
  },
  CA: {
    name: "Canada",
    code: "CA",
    multiplier: 0.98,
    currency: {
      code: "CAD",
      symbol: "C$",
    },
  },
  GB: {
    name: "United Kingdom",
    code: "GB",
    multiplier: 1.12,
    currency: {
      code: "GBP",
      symbol: "£",
    },
  },
  DE: {
    name: "Germany",
    code: "DE",
    multiplier: 1.08,
    currency: {
      code: "EUR",
      symbol: "€",
    },
  },
  FR: {
    name: "France",
    code: "FR",
    multiplier: 1.05,
    currency: {
      code: "EUR",
      symbol: "€",
    },
  },
  IT: {
    name: "Italy",
    code: "IT",
    multiplier: 0.95,
    currency: {
      code: "EUR",
      symbol: "€",
    },
  },
  ES: {
    name: "Spain",
    code: "ES",
    multiplier: 0.85,
    currency: {
      code: "EUR",
      symbol: "€",
    },
  },
  JP: {
    name: "Japan",
    code: "JP",
    multiplier: 1.02,
    currency: {
      code: "JPY",
      symbol: "¥",
    },
  },
  AU: {
    name: "Australia",
    code: "AU",
    multiplier: 1.15,
    currency: {
      code: "AUD",
      symbol: "A$",
    },
  },
  IN: {
    name: "India",
    code: "IN",
    multiplier: 0.26,
    currency: {
      code: "INR",
      symbol: "₹",
    },
  },
  BR: {
    name: "Brazil",
    code: "BR",
    multiplier: 0.48,
    currency: {
      code: "BRL",
      symbol: "R$",
    },
  },
  MX: {
    name: "Mexico",
    code: "MX",
    multiplier: 0.54,
    currency: {
      code: "MXN",
      symbol: "Mex$",
    },
  },
  ID: {
    name: "Indonesia",
    code: "ID",
    multiplier: 0.35,
    currency: {
      code: "IDR",
      symbol: "Rp",
    },
  },
  RU: {
    name: "Russia",
    code: "RU",
    multiplier: 0.35,
    currency: {
      code: "RUB",
      symbol: "₽",
    },
  },
  TR: {
    name: "Turkey",
    code: "TR",
    multiplier: 0.32,
    currency: {
      code: "TRY",
      symbol: "₺",
    },
  },
  ZA: {
    name: "South Africa",
    code: "ZA",
    multiplier: 0.42,
    currency: {
      code: "ZAR",
      symbol: "R",
    },
  },
  NG: {
    name: "Nigeria",
    code: "NG",
    multiplier: 0.28,
    currency: {
      code: "NGN",
      symbol: "₦",
    },
  },
  KE: {
    name: "Kenya",
    code: "KE",
    multiplier: 0.31,
    currency: {
      code: "KES",
      symbol: "KSh",
    },
  },
  // Add more countries as needed
}

export const DEFAULT_COUNTRY_CODE = "US"

