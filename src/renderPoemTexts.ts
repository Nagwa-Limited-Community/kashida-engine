export const renderPoemTexts = (linesElements: HTMLElement[], texts: string[]) => {
  if (linesElements.length !== texts.length) throw new Error("Lines elements and texts lengths are not matching")
  linesElements.forEach((el, i) => el.innerText = texts[i])
}

export default renderPoemTexts
