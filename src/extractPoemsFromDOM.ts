/** 
 * Extracts the poems from DOM, expecting any HTML element with the `poem` class like the following structure.
 * ``` HTML
 * <element class="poem">
 *  [Poem should exist here]
 * </element>
 * ```
 * @returns { HTMLElement[] } The elements containing the poems.
 */
export const extractPoemsFromDOM = (): HTMLElement[] => {
    return Array.from(document.querySelectorAll(".poem"))
}

export default extractPoemsFromDOM