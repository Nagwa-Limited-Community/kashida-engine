export const extractPoemsFromDOM = (): HTMLElement[] => {
    return Array.from(document.querySelectorAll(".poem"))
}

export default extractPoemsFromDOM