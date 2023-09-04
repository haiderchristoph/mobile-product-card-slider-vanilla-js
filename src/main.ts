import './style.scss'
import { renderHeadingIntoContainer } from 'components/Heading'
import { renderProductCardListIntoContainer } from 'components/ProductCardList'
import { items } from 'utils/constants'
import { isMobile } from 'utils/isMobile'

document.addEventListener('DOMContentLoaded', function () {
  renderHeadingIntoContainer(
    '#root',
    isMobile()
      ? 'Complete your dog&nbsp;look'
      : 'You might find those&nbsp;interesting'
  )
  renderProductCardListIntoContainer('#root', items)
})
