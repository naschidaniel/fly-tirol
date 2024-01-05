/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CartItem } from './CartItem';

export type Cart = {
    readonly id?: string;
    cart_items: Array<CartItem>;
    get_total_price: number;
    get_total_tax: number;
    order_url: string;
    get_total_netto_price: number;
    valid_until: string;
    is_valid: boolean;
    is_order_paid: boolean;
    is_expired: boolean;
    get_tax_dict: Record<string, string | null>;
    readonly order?: string;
    readonly date_added?: string;
    transaction_id?: string | null;
};

