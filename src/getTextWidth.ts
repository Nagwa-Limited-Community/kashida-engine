/**
 * Uses canvas.measureText to compute and return the width of the given text of given font in pixels.
 * @param { String } text The text to be rendered.
 * @param { String } font The css font descriptor that text is to be rendered with (e.g. "bold 14px verdana").
 * @returns { Number } The width of the text inputted.
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
export const getTextWidth: {
  (text: string, font: string): number
  canvas?: HTMLCanvasElement;
} = (text: string, font: string): number => {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"))
  const context = canvas.getContext("2d")
  context.font = font
  const metrics = context.measureText(text)
  return metrics.width
}
export default getTextWidth