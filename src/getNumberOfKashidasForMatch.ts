/**
 * Calculates and returns the number of Kashidas to be added per match.
 * @param { Number } index The index of the match.
 * @param { Number } matchesCount Total number of matches.
 * @param { Number } totalNumbersOfKashida Total number of Kashidas to be added for the full text.
 * @returns { Number } the number of Kashidas to be added for this match.
 */
export const getNumberOfKashidasForMatch = (index: number, matchesCount: number, totalNumbersOfKashida: number): number => {
    if (matchesCount <= 0) throw new Error("Total number of matches can not be less than or equals 0")
    if (totalNumbersOfKashida < 0) throw new Error("Total number of Kashidas needed can not be less than 0")
    if (index < 0 || index >= matchesCount) throw new Error("Index is out of range")
    const amountOfKashidasAddedToAllMatches = Math.floor(totalNumbersOfKashida / matchesCount)
    const extraKashidaAddedToThisMatch = index + 1 > totalNumbersOfKashida % matchesCount ? 0 : 1
    return amountOfKashidasAddedToAllMatches + extraKashidaAddedToThisMatch
}
export default getNumberOfKashidasForMatch