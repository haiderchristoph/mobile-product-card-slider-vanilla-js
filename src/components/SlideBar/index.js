import { SLIDE_BAR_SIZE } from '../../constants'
const updateSlideBarIndicator = (event, itemsCount) => {
  const scrollLeft = event.target.scrollLeft
  const scrollWidth = event.target.scrollWidth - event.target.clientWidth
  const scrolled = (scrollLeft / scrollWidth) * 100

  // calculate the bar indicator size based on the items
  const barIndicatorSize = SLIDE_BAR_SIZE / itemsCount

  const newTranslateValue = getBarIndicatorTranslateValue(
    scrolled,
    barIndicatorSize,
    SLIDE_BAR_SIZE
  )

  // update the UI
  document.getElementById(
    'bar-indicator'
  ).style.transform = `translate(${newTranslateValue}px)`
}

const getBarIndicatorTranslateValue = (
  scrolled, // number in percent
  barIndicatorSize, // number
  barSize
) => {
  // keep within bar container boundaries
  if (scrolled - barIndicatorSize <= 0) return 0
  if (scrolled - barIndicatorSize >= barSize) return barSize - barIndicatorSize

  // get more precise bar indicator position
  return scrolled - barIndicatorSize
}

const createSlideBar = (barSize, itemsCount) => {
  const barContainerElement = document.createElement('div')
  barContainerElement.id = 'bar-container'
  barContainerElement.style.width = `${barSize}px`

  const barIndicatorSize = barSize / itemsCount

  const barIndicatorElement = document.createElement('div')
  barIndicatorElement.id = 'bar-indicator'
  barIndicatorElement.style.width = `${barIndicatorSize}px`

  barContainerElement.appendChild(barIndicatorElement)

  return barContainerElement
}

export { createSlideBar, updateSlideBarIndicator }
