import { AddKashidaToText } from "./@types"
import getNumberOfKashidasForMatch from "./getNumberOfKashidasForMatch"
import { addBackExcludedWords, removeExcludedWords } from "./handleExcludedWords"

/**
  * Adds the desired amount of Kashida to a text.
  * @param { String } text The texts to add the Kashida to.
  * @param { Number } extraKashidaNeeded The amount of Kashida to be added.
  * @returns { String } The text with the added Kashida.
  */
export const addKashidaToText: AddKashidaToText = (text: string, extraKashidaNeeded: number): string => {
    if (typeof text !== "string" || !text) throw new Error("The text argument provided was not a string or was an empty string")
    if (!extraKashidaNeeded) return text
    const regexForKashidaSlots = addKashidaToText.regexForKashidaSlots || (addKashidaToText.regexForKashidaSlots = /(?=([جحخهعغفقثصضطكمنتلبيسشىئ]{1}[\u064b-\u0652]*[\u0622-\u064a]{1}))/g)
    const exceptionsPlaceholderMap = addKashidaToText.exceptionsPlaceholderMap || (addKashidaToText.exceptionsPlaceholderMap = {
        "بالله": "___${1}__/_",
        "فالله": "___${2}__/_",
        "تالله": "___${3}__/_",
        "والله": "___${4}__/_",
        "آلله": "___${5}__/_",
        "ألله": "___${6}__/_",
        "ولله": "___${7}__/_",
        "فلله": "___${8}__/_",
        "فبالله": "___${9}__/_",
        "وبالله": "___${10}__/_",
        "وتالله": "___${11}__/_",
        "فتالله": "___${12}__/_",
        "الله": "___${13}__/_",
        "لله": "___${14}__/_",
        "لأ": "___${15}__/_",
        "لا": "___${16}__/_",
        "لإ": "___${17}__/_",
        "لآ": "___${18}__/_",
    })
    let modifiedText = text
    //remove all the excluded words
    modifiedText = removeExcludedWords(modifiedText, exceptionsPlaceholderMap)
    // run the regex and add kashida
    const matches = modifiedText.matchAll(regexForKashidaSlots)
    const matchesArr = [...matches]
    const filteredMatchesArr = matchesArr.filter(([, match]) => !exceptionsPlaceholderMap.hasOwnProperty(match.replace(/[\u064c\u064b\u064d\u064e\u064f\u0650\u0651\u0652]*/g, "")))
    let kashidasAddedCount = 0
    filteredMatchesArr.forEach((match, i, { length: matchesCount }) => {
        const numberOfKashidasForMatch = getNumberOfKashidasForMatch(i, matchesCount, extraKashidaNeeded)
        const replaceStr = match[1]
        const matchStartIndex = match.index + kashidasAddedCount
        const matchEndIndex = matchStartIndex + replaceStr.length
        const matchWithKashida = replaceStr.slice(0, -1) + "\u0640".repeat(numberOfKashidasForMatch) + replaceStr.slice(-1)
        modifiedText = modifiedText.substring(0, matchStartIndex) + matchWithKashida + modifiedText.substring(matchEndIndex)
        kashidasAddedCount += numberOfKashidasForMatch
    })
    //add back all the excluded words
    modifiedText = addBackExcludedWords(modifiedText, exceptionsPlaceholderMap)
    //return the result
    return modifiedText
}

export default addKashidaToText