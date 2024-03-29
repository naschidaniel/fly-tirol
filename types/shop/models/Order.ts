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
    order_status_url: string;
    address: string;
    city: string;
    readonly date_added?: string;
    comment?: string;
    name?: string;
    state: string;
    email?: string;
    phone?: string;
    payment?: Order.payment;
    readonly invoice_pdf?: string;
    invoice_number?: string;
    invoice_date?: string | null;
    invoice_products_json?: any;
    tax_dict_json?: any;
    total?: number;
    zipcode: string;
    customer?: number | null;
};
export namespace Order {
    export enum payment {
        BANK_TRANSFER = 'BANK TRANSFER',
        ON_SITE = 'ON SITE',
        PAYPAL = 'PAYPAL',
    }
}

