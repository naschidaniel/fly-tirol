/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariant } from './ProductVariant';

export type Product = {
    readonly id?: number;
    name: string;
    slug: string;
    digital?: boolean;
    orderable: boolean;
    price?: number;
    readonly category?: string;
    variants: Array<ProductVariant>;
};

