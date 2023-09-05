import { isMobile } from 'utils/isMobile'
import { throttle } from 'utils/throttle'
import { SLIDE_BAR_SIZE } from 'utils/constants'
import { createSlideBar, updateSlideBarIndicator } from 'components/SlideBar'
import { ProductListItem } from 'utils/types/Item'

const createListItem = (item: ProductListItem) => {
  const { id, src, title, price } = item

  // containers
  const liElement = document.createElement('li')
  liElement.id = `list-item-${id}`
  liElement.classList.add('listItem')

  const cardContainerElement = document.createElement('div')
  cardContainerElement.classList.add('cardContainer')

  // content
  const cardContentElement = document.createElement('div')
  cardContentElement.classList.add('cardContent')

  // would be great to have different image sizes for special screen sizes, maybe use <picture /> with different sources for that
  const imgElement = document.createElement('img')
  imgElement.src = src
  imgElement.alt = title
  imgElement.classList.add('cardImage')

  const titleElement = document.createElement('h4')
  titleElement.classList.add('cardTitle')
  titleElement.textContent = title
  titleElement.ariaLabel = title
  // title allows browsers to spawn a built in tooltip for long text that got cut off.
  // Ideally, it would be great to add a proper tooltip (not in vanilla JS without 3rd party libs though)
  titleElement.title = title

  const priceElement = document.createElement('span')
  priceElement.textContent = price
  priceElement.ariaLabel = price
  priceElement.classList.add('cardPrice')

  const buttonElement = document.createElement('button')
  buttonElement.classList.add('cardButton')
  const buttonTitle = 'Add to cart'
  buttonElement.textContent = buttonTitle
  buttonElement.title = buttonTitle
  buttonElement.ariaLabel = buttonTitle

  // assemble
  cardContentElement.appendChild(titleElement)
  cardContentElement.appendChild(priceElement)

  cardContainerElement.appendChild(imgElement)
  cardContainerElement.appendChild(cardContentElement)
  cardContainerElement.appendChild(buttonElement)

  liElement.appendChild(cardContainerElement)

  return liElement
}

function renderProductCardListIntoContainer(
  selector: string,
  items: ProductListItem[]
) {
  const containerElement = document.querySelector(selector)

  const ulElement = document.createElement('ul')
  ulElement.classList.add('list')
  ulElement.id = 'list'

  items.forEach((item) => ulElement.appendChild(createListItem(item)))

  containerElement.appendChild(ulElement)

  // only render the slidebar on mobile screens
  if (isMobile()) {
    const slideBar = createSlideBar(SLIDE_BAR_SIZE, items.length)
    const slideBarWrapper = document.createElement('div')
    slideBarWrapper.id = 'slideBarWrapper'
    slideBarWrapper.classList.add('center')
    slideBarWrapper.appendChild(slideBar)

    containerElement.appendChild(slideBarWrapper)
    ulElement.classList.add('list__isMobile')

    // attach event listener to scroll event of the list
    ulElement.addEventListener('scroll', (event) => {
      throttle(() => {
        updateSlideBarIndicator(event, items.length)
      }, 100) // it's not much but it's honest work
    })
  }
}

export { renderProductCardListIntoContainer }
