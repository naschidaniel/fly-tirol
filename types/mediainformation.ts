export interface MediaInformation {
  url: string,
  path: string,
  file: string,
  dimensions: {
    height: number,
    width: number,
    orientation?: number,
    type: string,
    ratio: number
  },
  alt: string,
  title: string
}
