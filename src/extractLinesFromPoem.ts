/**
 * Marks and Extracts the text from the lines in the poem for later expecting the lines to exist inside the {@link poem} container element as follows.  
 * The lines should be in `div` elements nested inside other `div` element that is nested inside a big element that has the `linesGroup` class.  
 * Here's an example:  
 * ``` HTML
 * <element class="linesGroup">
 *  <div>
 *      <div> [The line should exist here] </div>
 *  </div>
 *  <div>
 *      <div> [The line should exist here] </div>
 *      <div> [The line should exist here] </div>
 *  </div>
 * </element>
 * ```
 * @param { HTMLElement } poem The HTML Element containing the poem.
 * @returns { [HTMLElement[], String[]] } The elements containing the poem lines and the strings of these lines as the following structure `[linesElements, linesTexts]` and both of them are in the same order.
 */
export const extractLinesFromPoem = (poem: HTMLElement): [HTMLElement[], string[]] => {
    const linesElements = Array.from(poem.querySelectorAll(".linesGroup div div")) as HTMLElement[]
    const linesTexts = linesElements.map((line) => line.innerText)
    return [linesElements, linesTexts]
}

export default extractLinesFromPoem