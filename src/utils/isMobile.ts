const isMobile = () => {
  // took this mobile detection code from https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent#mobile_device_detection
  // it's not perfect, but it uses feature detection over plain user agent detection
  let hasTouchScreen = false
  if ('maxTouchPoints' in window.navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0
  } else {
    const mQ = matchMedia?.('(pointer:coarse)')
    if (mQ?.media === '(pointer:coarse)') {
      hasTouchScreen = !!mQ.matches
    } else if ('orientation' in window) {
      hasTouchScreen = true // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const UA = navigator.userAgent
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    }
  }
  return hasTouchScreen
}

export { isMobile }