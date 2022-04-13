import { ExceptionsPlaceholderMap } from "./types"

export const removeExcludedWords = (line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string => {
    for (const exceptionWord in exceptionsPlaceholderMap) {
        line = line.replaceAll(exceptionWord, exceptionsPlaceholderMap[exceptionWord])
    }
    return line
}

export const addBackExcludedWords = (line: string, exceptionsPlaceholderMap: ExceptionsPlaceholderMap): string => {
    for (const exceptionWord in exceptionsPlaceholderMap) {
        line = line.replaceAll(exceptionsPlaceholderMap[exceptionWord], exceptionWord)
    }
    return line
}