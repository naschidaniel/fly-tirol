/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from './Order';
export type Voucher = {
    readonly id?: string;
    order?: Order;
    voucher_status_url: string;
    readonly date_added?: string;
    valid_until?: string | null;
    date_used?: string | null;
    email?: string;
    name?: string;
    status?: Voucher.status;
    voucher_dict_json?: any;
    readonly voucher_pdf?: string;
    comment?: string;
    voucher_number?: string;
};
export namespace Voucher {
    export enum status {
        VALID = 'VALID',
        USED = 'USED',
        INVALID = 'INVALID',
    }
}

