/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderCheckout = {
    readonly id?: string;
    reference_id: string;
    comment?: string;
    status?: OrderCheckout.status;
    payment?: OrderCheckout.payment;
    readonly date_added?: string;
    paypal_order_id?: string;
};
export namespace OrderCheckout {
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

