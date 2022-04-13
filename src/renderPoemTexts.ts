/**
 * Renders a set of texts to the required poem.
 * @param { HTMLElement[] } linesElements The poem element to render its lines.
 * @param { String[] } texts The list of texts to be rendered.
 */
export const renderPoemTexts = (linesElements: HTMLElement[], texts: string[]) => {
  if (linesElements.length !== texts.length) throw new Error("Lines elements and texts lengths are not matching")
  linesElements.forEach((el, i) => el.innerText = texts[i])
}

export default renderPoemTexts
