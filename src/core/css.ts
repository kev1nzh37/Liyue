import { injectStyles, toHump, transformCss, transformVars } from "./transform"

export const css = (className: string, style: any) => {
  const renderMap: any = {}
  const styleMap: any = {}

  transformCss(style, styleMap, className, className)
  injectStyles(styleMap, '.')

  Object.keys(styleMap).forEach((key) => {
    renderMap[toHump(key)] = styleMap[key].renderClassName
  })
  console.log(styleMap, renderMap)
  return Object.keys(renderMap).length === 1 ? renderMap.base : renderMap
}

