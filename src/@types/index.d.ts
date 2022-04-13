export interface GetTextWidth {
  (text: string, font: string): number
  canvas?: HTMLCanvasElement;
}

export interface TextWidths {
  textWidths: number[]
  maxTextWidth: number
} 