/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProductVariant } from './ProductVariant';
export type Product = {
    readonly id?: string;
    name: string;
    allow_comment?: boolean;
    slug: string;
    href: string;
    total_dates: number;
    digital?: boolean;
    is_voucher?: boolean;
    orderable: boolean;
    price?: number;
    tax?: number;
    readonly category?: string;
    variants: Array<ProductVariant>;
};

