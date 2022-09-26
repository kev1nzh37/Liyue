export const makeid = (length: number) => {
  let result = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const toLine = (text: string): string =>
  text.replace(/([A-Z])/g, "-$1").toLowerCase()

export const toHump = (text: string): string => {
  return text.replace(/\-(\w)/g, (_, letter: string) => letter.toUpperCase())
}
