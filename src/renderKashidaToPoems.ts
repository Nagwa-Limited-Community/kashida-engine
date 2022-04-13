import extractLinesFromPoem from "./extractLinesFromPoem"
import extractPoemsFromDOM from "./extractPoemsFromDOM"
import renderPoemTexts from "./renderPoemTexts"
import unifyTextsWidths from "./unifyTextsWidths"

/**
 *  Renders all the poem lines after adding kashida to it and unifying all its widths for all the poems available on page.  
 *  If the arguments were not provided they will fallback to the defaults resulting in expecting the following HTML structure in DOM.
 *  ``` HTML
 *  <element class="poem">
 *    <element class="linesGroup">
 *      <div>
 *        <div> [The line should exist here] </div>
 *      </div>
 *    </element>
 *    <element class="linesGroup">
 *      <div>
 *        <div> [The line should exist here] </div>
 *        <div> [The line should exist here] </div>
 *      </div>
 *    </element>
 *  </element>
 *   ```
 * @param { String= } [poemSelector =".poem"] The CSS selector used to extract the poems. Default value: `.poem`.
 * @param { String= } [lineSelector=".linesGroup div div"] The CSS selector used to extract the lines from the poem element. Default value: `.linesGroup div div`.
 */
export function renderKashidaToPoems(poemSelector?: string, lineSelector?: string): void

/**
 *  Renders all the poem lines after adding kashida to it and unifying all its widths for all the poems available on page expecting the previously mentioned structure in DOM. 
 * @param { Event= } e Any Event so that it can be used as an event handler.
 */
export function renderKashidaToPoems(e?: Event): void

export function renderKashidaToPoems(argument1?: string | Event, lineSelector?: string) {
    argument1 = typeof argument1 === "string" && argument1 ? argument1 : ".poem"
    lineSelector = typeof lineSelector === "string" && lineSelector ? lineSelector : ".linesGroup div div"
    const poems = extractPoemsFromDOM(argument1)
    for (const poem of poems) {
        const font = getComputedStyle(poem).font
        const [linesEls, lines] = extractLinesFromPoem(poem, lineSelector)
        const unifiedWidthLines = unifyTextsWidths(lines, font)
        renderPoemTexts(linesEls, unifiedWidthLines)
    }
}

export default renderKashidaToPoems