/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OrderCheckout = {
    readonly checkout_reference?: string;
    comment?: string;
    checkout_id?: string;
    total?: number;
    status?: OrderCheckout.status;
    readonly date_added?: string;
    sumup_return_value?: any;
    paypal_order_id?: string;
};

export namespace OrderCheckout {

    export enum status {
        CREATED = 'CREATED',
        PENDING = 'PENDING',
        FAILED = 'FAILED',
        PAID = 'PAID',
        EXPIRED = 'EXPIRED',
    }


}

