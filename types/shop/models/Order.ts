/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cart } from './Cart';
import type { OrderCheckout } from './OrderCheckout';
import type { OrderItem } from './OrderItem';
import type { OrderShippingNote } from './OrderShippingNote';
export type Order = {
    readonly id?: string;
    cart?: Cart;
    checkout?: OrderCheckout;
    get_status: string;
    get_payment: Order.get_payment;
    is_open_vouchers: boolean;
    is_shipping: boolean;
    order_status_url: string;
    get_vatrate_dict: Record<string, string | null>;
    get_total_netto_price: number;
    get_total_price: number;
    shippingnote: OrderShippingNote;
    get_orderitems: Array<OrderItem>;
    address: string;
    city: string;
    readonly date_added?: string;
    comment?: string;
    gender?: string;
    first_name?: string;
    last_name?: string;
    country: string;
    shipping_gender?: string;
    shipping_first_name?: string;
    shipping_last_name?: string;
    shipping_address?: string;
    shipping_city?: string;
    shipping_zipcode?: string;
    shipping_country?: string;
    shipping_phone?: string;
    email?: string;
    phone?: string;
    readonly invoice_pdf?: string;
    invoice_number?: string;
    invoice_date?: string | null;
    zipcode: string;
    customer?: number | null;
};
export namespace Order {
    export enum get_payment {
        BANK_TRANSFER = 'BANK TRANSFER',
        ON_SITE = 'ON SITE',
        PAYPAL = 'PAYPAL',
    }
}

