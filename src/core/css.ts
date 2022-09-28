import { injectStyles } from "./browser"
import { StyleTree } from "./styleTree"
import { transformCss } from "./transform"
import { toHump } from "./utils"

const compileRenderMap = (styleMap: any) => {
  const renderMap: any = {}
  Object.keys(styleMap).forEach((key) => {
    const { originName, selector } = styleMap[key]
    renderMap[toHump(selector)] = originName
  })

  return Object.keys(renderMap).length === 1 ? renderMap.base : renderMap
}
const compileStyleTextNode = (styleMap: any) => {
  let styleStr: string = ""
  Object.keys(styleMap).forEach((key) => {
    const { renderName, cssStr } = styleMap[key]
    styleStr += `${renderName}{${cssStr}}`
  })
  return styleStr
}

export const css = (className: string, style: any) => {
  const styleTree = new StyleTree(className, style)

  return styleTree.renderMap
}
