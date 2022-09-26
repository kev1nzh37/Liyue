import { injectStyles } from "./browser"
import { transformVars } from "./transform"

const VariantsMap = new Map()

const compileVarsTextNode = (originName: string, varsMap: any) => {
  let varsString: string = `${originName} {`
  Object.keys(varsMap).forEach((key: any) => {
    const value = varsMap[key]
    VariantsMap.set(key, value)

    varsString += `${value.originName}:${value.cssStr};`
  })

  varsString += "}"

  return varsString
}

const compileRenderMap = (vars: any) => {
  const nextVars = { ...vars }

  Object.keys(nextVars).forEach((key: string) => {
    const varsObj = nextVars[key]
    if (typeof varsObj === "string") {
      const variant = VariantsMap.get(key)
      nextVars[key] = `var(${variant.originName})`
    } else {
      nextVars[key] = compileRenderMap(varsObj)
    }
  })
  return nextVars
}
export const createVars = (originName: string, vars: any) => {
  const varsMap = transformVars(vars)
  const varsTextNode = compileVarsTextNode(originName, varsMap)
  const renderMap = compileRenderMap(vars)
  injectStyles(varsTextNode)

  console.log(renderMap)
  return renderMap
}
