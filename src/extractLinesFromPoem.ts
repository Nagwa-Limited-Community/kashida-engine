export const extractLinesFromPoem = (poem: HTMLElement, lineSelector = ".linesGroup div div"): [HTMLElement[], string[]] => {
    const linesElements = Array.from(poem.querySelectorAll(lineSelector)) as HTMLElement[]
    const linesTexts = linesElements.map((line) => line.innerText)
    return [linesElements, linesTexts]
}

export default extractLinesFromPoem