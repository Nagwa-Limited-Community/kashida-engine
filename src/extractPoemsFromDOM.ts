/** 
 * Extracts the poems from DOM, expecting any HTML element with the `poem` class like the following structure.
 * ``` HTML
 * <element class="poem">
 *  [Poem should exist here]
 * </element>
 * ```
 * @param { String } [poemSelector =".poem"] The CSS selector used to extract the poems. Default value: `.poem`.
 * @returns { HTMLElement[] } The elements containing the poems.
 */
export const extractPoemsFromDOM = (poemSelector: string = ".poem"): HTMLElement[] => {
    return Array.from(document.querySelectorAll(poemSelector))
}

export default extractPoemsFromDOM