import { injectStyles, transformVars, VariantsMap } from "./transform"

export const createVars = (originName: string, vars: any) => {
  const varsMap = transformVars(vars)
  injectStyles(
    {
      vars: {
        originName,
        cssStr: Object.values(varsMap)
          .map((item: any) => `${item.originName}:${item.cssStr}`)
          .join(";"),
      },
    },
    ":"
  )

  console.log(VariantsMap)
  return vars
}
