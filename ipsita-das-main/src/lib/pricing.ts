import { countries, type CountryCode, DEFAULT_COUNTRY_CODE } from "./countries"

// Base prices in USD
const BASE_PRICES = {
  regular: 499,
  sale: 199,
}

export function getCountryByCode(countryCode: string): {
  name: string
  code: string
  multiplier: number
  currency: {
    code: string
    symbol: string
  }
} {
  // Check if the country code exists in our list
  if (countryCode in countries) {
    return countries[countryCode as CountryCode]
  }

  // Return default country if not found
  return countries[DEFAULT_COUNTRY_CODE]
}

export function calculatePPPPrice(basePrice: number, countryCode: string): number {
  const country = getCountryByCode(countryCode)

  // Calculate price based on PPP multiplier
  const adjustedPrice = basePrice / country.multiplier

  // Format price appropriately based on currency
  if (country.currency.code === "JPY" || country.currency.code === "IDR") {
    // No decimal places for these currencies
    return Math.round(adjustedPrice)
  } else if (country.currency.code === "INR") {
    // Round to nearest 99 for INR (common in India)
    return Math.ceil(adjustedPrice / 100) * 100 - 1
  } else {
    // Round to nearest .99 for most currencies
    return Math.ceil(adjustedPrice) - 0.01
  }
}

export function formatPrice(price: number, countryCode: string): string {
  const country = getCountryByCode(countryCode)

  try {
    // Use Intl.NumberFormat for proper currency formatting
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: country.currency.code,
      maximumFractionDigits: ["JPY", "IDR"].includes(country.currency.code) ? 0 : 2,
      minimumFractionDigits: ["JPY", "IDR"].includes(country.currency.code) ? 0 : 2,
    }).format(price)
  } catch (error) {
    // Fallback formatting if Intl API fails
    const symbol = country.currency.symbol
    return `${symbol}${price.toLocaleString()}${error}`
  }
}

export function getPricing(countryCode: string) {
  // Calculate prices
  const regularPrice = calculatePPPPrice(BASE_PRICES.regular, countryCode)
  const salePrice = calculatePPPPrice(BASE_PRICES.sale, countryCode)

  // Format prices
  const formattedRegularPrice = formatPrice(regularPrice, countryCode)
  const formattedSalePrice = formatPrice(salePrice, countryCode)

  return {
    regularPrice: formattedRegularPrice,
    salePrice: formattedSalePrice,
    country: getCountryByCode(countryCode),
  }
}

