import { ResponsiveImage } from '~~/.nuxt/components'

export interface Cookie {
  name: string
  value: string
}


export interface License {
  license: string
  name: string
  version: string
}

export interface MediaInformation {
  alt: string
  dimensions: {
    height: number
    width: number
    orientation?: number
    type: string
    ratio: number
  }
  file: string
  path: string
  stem: string
  title: string
  url: string
}

export interface MetaData {
  category: string
  description: string
  draft?: string
  duration?: string
  flightDuration?: string
  image?: string
  imageGallery?: string
  isAppointment?: string
  location?: string
  order?: number
  path: string
  praxis?: string
  price?: string
  slug: string
  theorie?: string
  title: string
}

export interface TeamMember {
  information: string
  name: string
  picture: string
  position: string
}
