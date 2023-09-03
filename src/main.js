import './style.scss'
import { renderProductCardListIntoContainer } from 'components/ProductCardList'
import { items } from 'utils/constants'

document.addEventListener('DOMContentLoaded', function () {
  renderProductCardListIntoContainer('#root', items)
})
