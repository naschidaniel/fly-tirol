/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Cart } from './Cart';
import type { OrderCheckout } from './OrderCheckout';

export type Order = {
    readonly id?: string;
    cart?: Cart;
    checkout?: OrderCheckout;
    paid: boolean;
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
    tax?: number;
    total?: number;
    zipcode: string;
    customer?: number | null;
};

export namespace Order {

    export enum payment {
        BANK_TRANSFER = 'BANK TRANSFER',
        CREDIT_CARD = 'CREDIT CARD',
        ON_SITE = 'ON SITE',
        PAYPAL = 'PAYPAL',
    }


}

