import extractLinesFromPoem from "./extractLinesFromPoem"
import extractPoemsFromDOM from "./extractPoemsFromDOM"
import renderPoemTexts from "./renderPoemTexts"
import unifyTextsWidths from "./unifyTextsWidths"

/**
 * Renders all the poem lines after adding kashida to it and unifying all its widths for all the poems available on page.  
 */
export const renderKashidaToPoems = () => {
    const poems = extractPoemsFromDOM()
    for (const poem of poems) {
        const font = getComputedStyle(poem).font
        const [linesEls, lines] = extractLinesFromPoem(poem)
        const unifiedWidthLines = unifyTextsWidths(lines, font)
        renderPoemTexts(linesEls, unifiedWidthLines)
    }
}

export default renderKashidaToPoems