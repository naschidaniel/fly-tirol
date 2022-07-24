export interface Cookie {
  name: string,
  value: string,
}

export interface Course {
  dates: number,
  options: Product[]
  price: string,
}

export interface License {
  license: string,
  name: string,
  version: string,
}

export interface MediaInformation {
  alt: string,
  dimensions: {
    height: number,
    width: number,
    orientation?: number,
    type: string,
    ratio: number
  },
  file: string,
  path: string,
  title: string
  url: string,
}

export interface MetaData {
  category: string,
  description: string,
  draft?: string,
  duration?: string,
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
  dateString: string,
  endDate?: Date,
  id: string,
  isDateItem: boolean,
  isShowProduct: boolean,
  month?: string,
  optionDateString: string,
  price: number,
  productOptions: ProductOptions[],
  productPrices: number[],
  productTitle: string,
  productType: string,
  selectedId?: string,
  slug: string,
  startDate?: Date,
  startDay?: string,
  variants: ProductVariant[],
  variantTitle: v.title,
}

export interface ProductOptions {
  name: string,
  values: string[]
}

export interface ProductVariant {
  id: string,
  option?: string,
  optionDateString: string,
  price: number,
  productTitle: string,
  title: string,
}

export interface Calender {
  [key: string]: Product[]
}

export interface TeamMember {
  information: string,
  name: string,
  picture: string,
  position: string,
}
