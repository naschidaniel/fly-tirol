/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from './Order';
export type Checkout = {
    readonly checkout_reference?: string;
    order?: Order;
    comment?: string;
    checkout_id?: string;
    total?: number;
    status?: Checkout.status;
    readonly date_added?: string;
    sumup_return_value?: any;
    paypal_order_id?: string;
};
export namespace Checkout {
    export enum status {
        CREATED = 'CREATED',
        PENDING = 'PENDING',
        FAILED = 'FAILED',
        PAID = 'PAID',
        EXPIRED = 'EXPIRED',
    }
}

