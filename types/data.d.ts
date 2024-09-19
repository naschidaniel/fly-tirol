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
  bikeandfly?: 'bike' | 'bike&fly' | 'fly'
  lang: string
  category: string
  description: string
  draft?: string
  duration?: string
  excluded?: string
  flightDuration?: string
  image?: string
  imageGallery?: string
  included?: string
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

export interface ExpoEntry {
  information: string
  name: string
  picture: string
  href: string
}
