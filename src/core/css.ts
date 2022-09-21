import { makeid } from "./utils"
import { toLine } from "./transform"

const transformCss = (
  style: any,
  styleMap: any,
  className: string,
  parent?: string,
  nextClassName?: string
) => {
  Object.keys(style).forEach((key) => {
    const value = style[key]
    const originClassName = `${className}__${makeid(6)}`
    const renderClassName = `${
      nextClassName ? nextClassName + " " : ""
    }${originClassName}`
    if (typeof value === "object") {
      transformCss(value, styleMap, `${className}-${key}`, key, renderClassName)
    } else {
      const cssItemName = parent || "base"
      if (!styleMap[cssItemName]) {
        styleMap[cssItemName] = {
          cssStr: "",
          originClassName,
          renderClassName,
        }
      }

      styleMap[cssItemName].cssStr += `${toLine(key)}:${value};`
    }
  })
}

const injectStyles = (styleMap: any) => {
  let styleStr: string = ""
  const styleEl = document.createElement("style")
  styleEl.setAttribute("type", "text/css")

  Object.keys(styleMap).forEach((key) => {
    const { originClassName, cssStr } = styleMap[key]
    styleStr += `.${originClassName}{${cssStr}}`
  })
  const styleNode = document.createTextNode(styleStr)

  styleEl.appendChild(styleNode)
  document.head.appendChild(styleEl)
}
export const css = (className: string, style: any) => {
  const renderMap: any = {}
  const styleMap: any = {}

  transformCss(style, styleMap, className)
  injectStyles(styleMap)

  Object.keys(styleMap).forEach((key) => {
    renderMap[key] = styleMap[key].renderClassName
  })

  return renderMap
}
