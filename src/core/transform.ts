import { makeid, toLine } from "./utils"

const generateOriginName = (selector: string) => {
  if (selector.startsWith("#")) {
    return selector
  } else return `${selector}__${makeid(6)}`
}
export const cleanSelector = (selector: string): string => {
  if (selector.startsWith("#")) {
    return selector.slice(1)
  }
  else return selector
}

const nextCss = (map: any, style: any, selector: string, parent?: string) => {
  const originName = generateOriginName(selector)
  const renderName = `${parent || ""} .${originName}`
  Object.keys(style).forEach((childSelectorOrStyle: string) => {
    const value = style[childSelectorOrStyle]

    if (typeof value === "object") {
      nextCss(map, value, childSelectorOrStyle, renderName)
    } else {
      if (!map[originName]) {
        map[originName] = {
          cssStr: "",
          originName,
          renderName,
          selector,
        }
      }
      map[originName].cssStr += `${toLine(childSelectorOrStyle)}:${value};`
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

export const transformCss = (style: any, selector: string) => {
  const map = {}
  nextCss(map, style, selector)
  return map
}

export const transformVars = (vars: any) => {
  const map = {}
  nextVars(map, vars)
  return map
}
