export const extractPoemsFromDOM = (poemSelector = ".poem"): HTMLElement[] => {
    return Array.from(document.querySelectorAll(poemSelector))
}

export default extractPoemsFromDOM