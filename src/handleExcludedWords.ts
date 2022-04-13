import { ExceptionsPlaceholderMap } from "./types"

/**
 * Replaces all the exception words from a line with the corresponding placeholders
 * @param { String } line The line to remove the exception words from
 * @param { ExceptionsPlaceholderMap } exceptionsPlaceholderMap The exception to placeholder map.
 * @returns { String } The line with placeholders.
 */
export const removeExcludedWords = (line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string => {
    for (const exceptionWord in exceptionsPlaceholderMap) {
        line = line.replaceAll(exceptionWord, exceptionsPlaceholderMap[exceptionWord])
    }
    return line
}

/**
 * Replaces all the placeholders from a line with the corresponding exception words.
 * @param { String } line The line to add back the exception words to.
 * @param { ExceptionsPlaceholderMap } exceptionsPlaceholderMap The exception to placeholder map.
 * @returns { String } The line with exception words added back.
 */
export const addBackExcludedWords = (line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string => {
    for (const exceptionWord in exceptionsPlaceholderMap) {
        line = line.replaceAll(exceptionsPlaceholderMap[exceptionWord], exceptionWord)
    }
    return line
}