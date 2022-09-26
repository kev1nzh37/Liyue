export const injectStyles = (styleTextNode: string): void => {
  const styleEl = document.createElement("style")
  styleEl.setAttribute("type", "text/css")
  const styleNode = document.createTextNode(styleTextNode)

  styleEl.appendChild(styleNode)
  document.head.appendChild(styleEl)
}
