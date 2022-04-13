export const extractLinesFromPoem = (poem: HTMLElement): [HTMLElement[], string[]] => {
    const linesElements = Array.from(poem.querySelectorAll(".linesGroup div div")) as HTMLElement[]
    const linesTexts = linesElements.map((line) => line.innerText)
    return [linesElements, linesTexts]
}

export default extractLinesFromPoem