import extractLinesFromPoem from "./extractLinesFromPoem"
import extractPoemsFromDOM from "./extractPoemsFromDOM"
import renderPoemTexts from "./renderPoemTexts"
import unifyTextsWidths from "./unifyTextsWidths"

export const renderKashidaToPoems = (poemSelector?: string, lineSelector?: string) => {
    const poems = extractPoemsFromDOM(poemSelector)
    for (const poem of poems) {
        const font = getComputedStyle(poem).font
        const [linesEls, lines] = extractLinesFromPoem(poem, lineSelector)
        const unifiedWidthLines = unifyTextsWidths(lines, font)
        renderPoemTexts(linesEls, unifiedWidthLines)
    }
}

export default renderKashidaToPoems