const renderHeadingIntoContainer = (selector: string, text: string) => {
  const container = document.querySelector(selector)
  const headingElement = document.createElement('h2')
  headingElement.innerHTML = text
  headingElement.classList.add('heading-h2')
  container.appendChild(headingElement)
}

export { renderHeadingIntoContainer }
