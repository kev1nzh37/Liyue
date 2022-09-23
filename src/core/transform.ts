import { makeid } from "./utils"

export const VariantsMap = new Map()
export const toLine = (text: string): string =>
  text.replace(/([A-Z])/g, "-$1").toLowerCase()

export const toHump = (text: string): string => {
  return text.replace(/\-(\w)/g, (_, letter: string) => letter.toUpperCase())
}

export const transformCss = (
  style: any,
  styleMap: any,
  className: string,
  parent?: string
) => {
  Object.keys(style).forEach((key) => {
    const value = style[key]
    const originName = `${className}__${makeid(6)}`
    const renderClassName = `${originName}`
    if (typeof value === "object") {
      transformCss(value, styleMap, `${className}-${key}`, key)
    } else {
      const cssItemName = parent || "base"
      if (!styleMap[cssItemName]) {
        styleMap[cssItemName] = {
          cssStr: "",
          originName,
          renderClassName,
        }
      }
      styleMap[cssItemName].cssStr += `${toLine(key)}:${value};`
    }
  })
}

export const nextVars = (map: any, vars: any, parentName: string = "") => {
  Object.keys(vars).forEach((key) => {
    const value = vars[key]
    if (typeof value === "object") {
      const nextParentName = `${parentName}${key}-`
      nextVars(map, value, nextParentName)
    } else {
      const varsContent = {
        cssStr: value,
        originName: `--${parentName}${key}`,
      }
      map[key] = varsContent
      VariantsMap.set(key, varsContent)
    }
  })
}

export const transformVars = (vars: any, parentName: string = "") => {
  const map = {}
  nextVars(map, vars, parentName)
  return map
}

export const injectStyles = (styleMap: any, stylePrefix: string) => {
  let styleStr: string = ""
  const styleEl = document.createElement("style")
  styleEl.setAttribute("type", "text/css")

  Object.keys(styleMap).forEach((key) => {
    const { originName, cssStr } = styleMap[key]
    styleStr += `${stylePrefix}${originName}{${cssStr}}`
  })
  const styleNode = document.createTextNode(styleStr)

  styleEl.appendChild(styleNode)
  document.head.appendChild(styleEl)
}
