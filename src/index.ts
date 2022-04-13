import renderKashidaToPoems from "./renderKashidaToPoems";
import unifyTextsWidths from "./unifyTextsWidths"
import getTextWidth from "./getTextWidth"
import getTextsWidths from "./getTextsWidths"

window.addEventListener("load", renderKashidaToPoems)

export {
    unifyTextsWidths,
    renderKashidaToPoems,
    getTextWidth,
    getTextsWidths
}