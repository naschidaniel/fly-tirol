/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OrderItem = {
    readonly id?: string;
    get_total_item_price: number;
    name: string;
    quantity: number;
    variants?: any;
    is_voucher?: boolean;
    item_price?: number;
    is_shipping?: boolean;
    voucher_number?: any;
    readonly updated_at?: string;
    product_vatrate?: OrderItem.product_vatrate;
    product_vatrate_float?: number;
    order: string;
};
export namespace OrderItem {
    export enum product_vatrate {
        NORMAL_VATRATE = 'NORMAL_VATRATE',
        REDUCED_VATRATE = 'REDUCED_VATRATE',
        ZERO_VATRATE = 'ZERO_VATRATE',
    }
}

