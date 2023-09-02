import './style.scss'
import { renderListIntoContainer } from './components/Card'
import { items } from './constants'

document.addEventListener('DOMContentLoaded', function () {
  renderListIntoContainer('#root', items)
})
