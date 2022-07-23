export interface Cookie {
  name: string,
  value: string,
}

export interface License {
  name: string,
  version: string,
  license: string,
}

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

export interface MetaData {
  category: string,
  description: string,
  duration?: string,
  draft?: string,
  flightDuration?: string,
  image?: string,
  imageGallery?: string,
  isAppointment?: string,
  location?: string,
  order?: number,
  path: string,
  praxis?: string,
  price?: string,
  slug: string,
  theorie?: string,
  title: string,
}
