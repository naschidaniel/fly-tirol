/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CartItem } from './CartItem';
export type Cart = {
    readonly id?: string;
    get_cart_items: Array<CartItem>;
    get_total_price: number;
    order_url: string;
    valid_until: string;
    is_valid: boolean;
    is_order_paid: boolean;
    is_order_created: boolean;
    is_expired: boolean;
    get_order_id: string;
    readonly order?: string;
    readonly date_added?: string;
};

