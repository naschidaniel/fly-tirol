/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from './Order';
export type Voucher = {
    readonly id?: string;
    order?: Order;
    readonly date_added?: string;
    readonly valid_added?: string;
    email?: string;
    status?: Voucher.status;
    voucher_dict_json?: any;
    readonly vouchers_pdf?: string;
};
export namespace Voucher {
    export enum status {
        VALID = 'VALID',
        USED = 'USED',
        INVALID = 'INVALID',
    }
}

