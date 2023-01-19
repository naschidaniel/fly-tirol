/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProductVariant } from './ProductVariant';

export type Product = {
    readonly id?: string;
    name: string;
    allow_comment?: boolean;
    slug: string;
    digital?: boolean;
    orderable: boolean;
    price?: number;
    tax?: number;
    readonly category?: string;
    variants: Array<ProductVariant>;
};

