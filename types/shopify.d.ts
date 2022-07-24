export interface ShopifyProducts {
  productType: string,
  handle: string,
  title: string,
  options: {
    name: string,
    values: string[],
  }[],
  variants: {
    id: string,
    title: string,
    price: string,
  }[]
}

export interface ShopifyLineItems {
  variant: {
    title: string,
    price: number,
  },
  customAttributes: {
    key: string,
    value: string,
    price: number,
  }[]
}

export interface ShopifyCart {
  createdAt: string,
  ready: boolean,
  id: string,
  lineItems: ShopifyLineItems[]
  webUrl: string,
  completedAt: string,
  subtotalPrice: string,
}

export interface ShopifyLineItems {
  key: string,
  id: string,
  title: string,
  quantity: number,
  variant?: string[],
  customAttribute?: CustomAttribute[],
}

export interface CustomAttribute {
  key: string;
  value: string;
}
