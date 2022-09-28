import { makeid, toHump, toLine } from "./utils"
import { injectStyles } from "./browser"

type StyleNode = {
  [key: string]: string | StyleNode | null
}

export class StyleTree {
  wrapperClass: string | null = null

  tree: any = new Map()
  renderList: any = []
  styleStr: string = ""
  renderMap: any = {}

  constructor(className: string, styleMap: any) {
    this.init(className, styleMap)

    this.tansformCss()
    this.transformStyleTextNode()
    this.transformRenderMap()

    injectStyles(this.styleStr)
    console.log(this.tree, this.renderList, this.styleStr)
  }

  private transformRenderMap() {
    const renderMap: any = {}
    this.renderList.forEach((item: any) => {
      renderMap[toHump(item.seletor)] = item.id
    })
    this.renderMap = renderMap
  }
  private tansformCss() {
    const { tree, wrapperClass } = this

    let renderList: any = []
    let node = tree.get(wrapperClass)

    this.nextCss(node, renderList)
    this.renderList = renderList
  }

  private transformStyleTextNode() {
    let styleStr: string = ""

    for (let i = this.renderList.length - 1; i >= 0; i--) {
      const { renderName, styleStr: itemStyleStr } = this.renderList[i]
      if (!itemStyleStr) continue
      styleStr += `.${renderName.reverse().join(" .")}{${itemStyleStr}}\n`
    }
    this.styleStr = styleStr
  }

  private nextCss(node: any, list: any) {
    if (node.children?.length) {
      for (let child of node.children) {
        this.nextCss(this.tree.get(child), list)
      }
    }
    if (node.parent === null) node.renderName = [node.id]
    else {
      let renderName = [node.id]
      let cur = this.tree.get(node.parent)

      while (cur) {
        renderName.push(cur.id)
        cur = this.tree.get(cur.parent)
      }
      node.renderName = renderName
    }
    list.push(node)
  }

  private init(
    className: string,
    styleMap: any,
    parent = null as null | string
  ) {
    const children: any = []
    const style: any = {}
    let styleStr: string = ""
    const id = makeid(6)
    const mapKey = `${className}__${id}`

    if (parent === null) this.wrapperClass = mapKey

    Object.keys(styleMap).forEach((key: string) => {
      const styleNode = styleMap[key]

      if (typeof styleNode === "string") {
        style[key] = styleNode
        styleStr += `${toLine(key)}:${styleNode};`
      } else children.push(this.init(key, styleNode, mapKey))
    })

    this.tree.set(mapKey, {
      style,
      styleStr,
      children,
      parent,
      id: mapKey,
      seletor: className,
    })
    return mapKey
  }
}
