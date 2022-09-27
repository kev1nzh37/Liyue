import { makeid } from "./utils"

type StyleNode = {
  [key: string]: string | StyleNode | null
}
export class StyleTree {
  tree: any = new Map()
  wrapperClass: string | null = null
  constructor(className: string, styleMap: any) {
    this.init(className, styleMap)

    this.tansformCss()
    console.log(this.tree)
  }
  private tansformCss() {
    const { tree, wrapperClass } = this

    let list: any = []
    let node = tree.get(wrapperClass)
    this.nextCss(node, list)

    for (let node of list) {
        console.log('loop ----------------------------')
      if (node.parent === null) node.renderName = node.id
      else {
        let renderName = ""
        let cur = this.tree.get(node.parent)
        console.log(cur)
        while (cur.parent) {
          renderName += cur.id
          cur = this.tree.get(cur.parent)
        }

        node.renderName = renderName
      }
    }
    console.log(list, node)
  }

  private nextCss(node: any, list: any) {
    if (node.children?.length) {
      for (let child of node.children) {
        this.nextCss(this.tree.get(child), list)
      }
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
    const id = makeid(6)
    const mapKey = `${className}__${id}`

    Object.keys(styleMap).forEach((key: string) => {
      const styleNode = styleMap[key]

      if (typeof styleNode === "string") {
        style[key] = styleNode
      } else children.push(this.init(key, styleNode, mapKey))
    })

    const map = {
      style,
      children,
      parent,
      id: mapKey,
    }
    if (parent === null) this.wrapperClass = mapKey
    this.tree.set(mapKey, map)

    return mapKey
  }
}
