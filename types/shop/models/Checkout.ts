/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from './Order';
export type Checkout = {
    readonly id?: string;
    order?: Order;
    reference_id: string;
    comment?: string;
    status?: Checkout.status;
    payment?: Checkout.payment;
    readonly date_added?: string;
    paypal_order_id?: string;
};
export namespace Checkout {
    export enum status {
        CREATED = 'CREATED',
        PENDING = 'PENDING',
        FAILED = 'FAILED',
        NOT_COMPLETED = 'NOT COMPLETED',
        PAID = 'PAID',
        EXPIRED = 'EXPIRED',
    }
    export enum payment {
        BANK_TRANSFER = 'BANK TRANSFER',
        ON_SITE = 'ON SITE',
        PAYPAL = 'PAYPAL',
    }
}

