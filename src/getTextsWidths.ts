import { TextWidths } from "./types";
import getTextWidth from "./getTextWidth"

export const getTextsWidths = (texts: string[], font: string): TextWidths => {
  const widths = texts.map(text => getTextWidth(text, font))
  return { textWidths: widths, maxTextWidth: Math.max.apply(Math, widths) }
}