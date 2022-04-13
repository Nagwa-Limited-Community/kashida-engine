import addKashidaToText from "./addKashidaToText"
import { getTextsWidths } from "./getTextsWidths"
import getTextWidth from "./getTextWidth"

/**
  * Unifies the widths of all the inputted texts to match the max width.
  * @param { String[] } texts The texts to be unified.
  * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
  * @returns { String[] } The unified width text array. 
  */
export const unifyTextsWidths = (texts: string[], font: string): string[] => {
  const { textWidths, maxTextWidth } = getTextsWidths(texts, font)
  const kashidaWidth = getTextWidth("\u0640", font)
  return texts.map((text, i) => {
    const textWidth = textWidths[i]
    const extraWidthNeeded = maxTextWidth - textWidth
    const extraKashidaNeeded = Math.round(extraWidthNeeded / kashidaWidth)
    return addKashidaToText(text, extraKashidaNeeded)
  })
}

export default unifyTextsWidths