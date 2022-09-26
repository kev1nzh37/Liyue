import { injectStyles } from "./browser"
import { transformCss } from "./transform"
import { toHump } from "./utils"

const compileRenderMap = (styleMap: any) => {
  const renderMap: any = {}
  Object.keys(styleMap).forEach((key) => {
    renderMap[toHump(key)] = styleMap[key].renderClassName
  })

  return Object.keys(renderMap).length === 1 ? renderMap.base : renderMap
}
const compileStyleTextNode = (styleMap: any) => {
  let styleStr: string = ""
  Object.keys(styleMap).forEach((key) => {
    const { originName, cssStr } = styleMap[key]
    styleStr += `.${originName}{${cssStr}}`
  })

  return styleStr
}

export const css = (className: string, style: any) => {
  const styleMap: any = transformCss(style, className)
  const styleTextNode = compileStyleTextNode(styleMap)
  const renderMap = compileRenderMap(styleMap)

  injectStyles(styleTextNode)
  return renderMap
}
