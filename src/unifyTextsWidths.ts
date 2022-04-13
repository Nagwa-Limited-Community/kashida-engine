import addKashidaToText from "./addKashidaToText"
import { getTextsWidths } from "./getTextsWidths"
import getTextWidth from "./getTextWidth"

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