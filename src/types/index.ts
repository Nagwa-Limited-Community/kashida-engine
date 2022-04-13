
/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * @param { String } text The text to be rendered.
 * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * @returns { Number } The width of the text inputted.
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export declare interface getTextWidth {
  (text: string, font: string): number
  canvas?: HTMLCanvasElement;
}

/**
  * Adds the desired amount of Kashida to a text.
  * @param { String } text The texts to add the Kashida to.
  * @param { Number } extraKashidaNeeded The amount of Kashida to be added.
  * @returns { String } The text with the added Kashida.
  */
export declare interface addKashidaToText {
  (text: string, extraKashidaNeeded: number): string
  regexForKashidaSlots?: RegExp
  exceptionsPlaceholderMap?: ExceptionsPlaceholderMap
}

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
 * @param { String= } [lineSelector=".linesGroup div div"] The CSS selector used to extract the lines from the poem element. Default value: `.linesGroup div div`.
 * @returns { [HTMLElement[], String[]] } The elements containing the poem lines and the strings of these lines as the following structure `[linesElements, linesTexts]` and both of them are in the same order.
 */
export declare function extractLinesFromPoem(poem: HTMLElement, lineSelector?: string): [HTMLElement[], string[]]

/** 
 * Extracts the poems from DOM, expecting any HTML element with the `poem` class like the following structure.
 * ``` HTML
 * <element class="poem">
 *  [Poem should exist here]
 * </element>
 * ```
 * @param { String= } [poemSelector =".poem"] The CSS selector used to extract the poems. Default value: `.poem`.
 * @returns { HTMLElement[] } The elements containing the poems.
 */
export declare function extractPoemsFromDOM(poemSelector?: string): HTMLElement[]

/**
 * Calculates and returns the number of Kashidas to be added per match.
 * @param { Number } index The index of the match.
 * @param { Number } matchesCount Total number of matches.
 * @param { Number } totalNumbersOfKashida Total number of Kashidas to be added for the full text.
 * @returns { Number } the number of Kashidas to be added for this match.
 */
export declare function getNumberOfKashidasForMatch(index: number, matchesCount: number, totalNumbersOfKashida: number): number

/**
 * Uses {@link getTextWidth} to compute and return the widths of the given texts of given font in pixels and the max width of all the sentences.
 * @param { String[] } texts The texts to be rendered.
 * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * @returns { TextWidths } The widths of the texts inputted and the max text width. 
 */
export declare function getTextsWidths(texts: string[], font: string): TextWidths

/**
 * Replaces all the exception words from a line with the corresponding placeholders
 * @param { String } line The line to remove the exception words from
 * @param { ExceptionsPlaceholderMap } exceptionsPlaceholderMap The exception to placeholder map.
 * @returns { String } The line with placeholders.
 */
export declare function removeExcludedWords(line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string

/**
 * Replaces all the placeholders from a line with the corresponding exception words.
 * @param { String } line The line to add back the exception words to.
 * @param { ExceptionsPlaceholderMap } exceptionsPlaceholderMap The exception to placeholder map.
 * @returns { String } The line with exception words added back.
 */
export declare function addBackExcludedWords(line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string

/**
 * Renders all the poem lines after adding kashida to it and unifying all its widths for all the poems available on page.  
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
export declare function renderKashidaToPoems(poemSelector?: string, lineSelector?: string): void

/**
 * Renders a set of texts to the required poem.
 * @param { HTMLElement[] } linesElements The poem element to render its lines.
 * @param { String[] } texts The list of texts to be rendered.
 */
export declare function renderPoemTexts(linesElements: HTMLElement[], texts: string[]): void

/**
  * Unifies the widths of all the inputted texts to match the max width.
  * @param { String[] } texts The texts to be unified.
  * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
  * @returns { String[] } The unified width text array. 
  */
export declare function unifyTextsWidths(texts: string[], font: string): string[]

export declare interface ExceptionsPlaceholderMap { [key: string]: string }

export declare interface TextWidths {
  textWidths: number[]
  maxTextWidth: number
} 
