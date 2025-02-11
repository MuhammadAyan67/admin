export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-08'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skttllu5APtmh0sehkqXsgkzvFc8AgXpt57cD8RJJt28RG0izMkh21XYcikXG9VaZG2688rmLYP8AgJnZjUawhS8NtJ89FMg9xue7LqiIHLPZFFdijk8jzJSSgsXcgXMOTOuOD8KS5JeiNdpyNdSFBy4O2kcZcXo31KRFaXGAfXStcWiVhAf",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
