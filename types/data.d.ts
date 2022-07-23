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

export interface Product {
    productTitle: string,
    productType: string,
    productPrices: number[],
    productOptions: {
      name: string,
      values: string[]
    }[],
    slug: string,
    variantTitle: v.title,
    dateString: string,
    id: string,
    isShowProduct: boolean,
    isDateItem: boolean,
    startDate?: Date,
    startDay?: string,
    endDate?: Date,
    month?: string,
    optionDateString: string,
    price: number,
    variants: any[],
    selectedId?: string,
  }

export interface Calender {
  [key: string]: Product[]
}
