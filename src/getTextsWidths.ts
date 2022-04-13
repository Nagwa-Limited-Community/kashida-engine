import { TextWidths } from "./types";
import getTextWidth from "./getTextWidth"

/**
 * Uses {@link getTextWidth} to compute and return the widths of the given texts of given font in pixels and the max width of all the sentences.
 * @param { String[] } texts The texts to be rendered.
 * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * @returns { TextWidths } The widths of the texts inputted and the max text width. 
 */
export const getTextsWidths = (texts: string[], font: string): TextWidths => {
  const widths = texts.map(text => getTextWidth(text, font))
  return { textWidths: widths, maxTextWidth: Math.max.apply(Math, widths) }
}