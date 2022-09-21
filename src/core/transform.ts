export const toLine = (text: string) => text.replace(/([A-Z])/g, "-$1").toLowerCase()

export const transformCss = (style: any) => {

    Object.keys(style).forEach((key) => {
        const value = style[key]
        if (typeof value === 'object') {
            transformCss(value)
        } else {
            style[toLine(key)] = value
        }
    })
}
