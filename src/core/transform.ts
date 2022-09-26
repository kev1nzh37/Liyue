import { makeid, toLine } from "./utils"

const nextCss = (map: any, style: any, className: string, parent?: string) => {
  Object.keys(style).forEach((key) => {
    const value = style[key]

    if (typeof value === "object") {
      nextCss(map, value, `${className}-${key}`, key)
    } else {
      const originName = `${className}__${makeid(6)}`
      const renderClassName = `${originName}`
      const cssItemName = parent || className

      if (!map[cssItemName]) {
        map[cssItemName] = {
          cssStr: "",
          originName,
          renderClassName,
        }
      }
      map[cssItemName].cssStr += `${toLine(key)}:${value};`
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
        originName: `--${parentName}${key}__${makeid(6)}`,
      }
      map[key] = varsContent
    }
  })
}

export const transformCss = (style: any, className: string) => {
  const map = {}
  nextCss(map, style, className)
  return map
}

export const transformVars = (vars: any, parentName: string = "") => {
  const map = {}
  nextVars(map, vars, parentName)
  return map
}
