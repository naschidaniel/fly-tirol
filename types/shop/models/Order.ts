/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Cart } from './Cart';
import type { OrderCheckout } from './OrderCheckout';
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
    address: string;
    city: string;
    readonly date_added?: string;
    comment?: string;
    name?: string;
    country: string;
    shipping_name?: string;
    shippig_address?: string;
    shipping_city?: string;
    shipping_country?: string;
    email?: string;
    phone?: string;
    readonly invoice_pdf?: string;
    invoice_number?: string;
    invoice_date?: string | null;
    invoice_data_json?: any;
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

