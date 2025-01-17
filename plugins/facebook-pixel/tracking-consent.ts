function pixelLoader(): Promise<facebook.Pixel.Event> {
  return new Promise((resolve, reject) => {
    const fbq = window.fbq
    if (fbq) {
      resolve(fbq)
    }
    document.addEventListener('DOMContentLoaded', () => {
      const fbq = window.fbq
      if (fbq) {
        resolve(fbq)
      } else {
        reject('window.fbq not defined after DOMContentLoaded')
      }
    })
  })
}

export function applyConsentDecisionToPixel(
  decision: { analytics: boolean; marketing: boolean },
  fbq: facebook.Pixel.Event = global.fbq
) {
  const { marketing } = decision

  if (marketing) { // pixel is used for marketing/ads
    fbq('consent', 'grant')
  }
}

export async function setupTrackingConsentInPixel({
  consentDecisionLoader,
}: {
  consentDecisionLoader: () => undefined | { analytics: boolean; marketing: boolean }
}) {
  const fbq = await pixelLoader()
  const decision = consentDecisionLoader()
  if (decision) {
    applyConsentDecisionToPixel(decision, fbq)
  }
}
