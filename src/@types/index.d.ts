export interface GetTextWidth {
  (text: string, font: string): number
  canvas?: HTMLCanvasElement;
}

export interface AddKashidaToText {
  (text: string, extraKashidaNeeded: number): string
  regexForKashidaSlots?: RegExp
  exceptionsPlaceholderMap?: ExceptionsPlaceholderMap
}

export interface ExceptionsPlaceholderMap { [key: string]: string }

export interface TextWidths {
  textWidths: number[]
  maxTextWidth: number
} 