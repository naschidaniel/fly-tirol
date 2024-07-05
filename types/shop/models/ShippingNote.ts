/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ShippingNote = {
    readonly id?: string;
    readonly date_added?: string;
    comment?: string;
    email?: string;
    shipping_name?: string;
    shippig_address?: string;
    shipping_city?: string;
    shipping_country?: string;
    status?: ShippingNote.status;
    shipping_dict_json?: any;
    readonly shipping_pdf?: string;
    shipping_number?: string;
    orders: Array<string>;
};
export namespace ShippingNote {
    export enum status {
        OPEN = 'OPEN',
        BULK_ORDER = 'BULK_ORDER',
        SHIPPED = 'SHIPPED',
    }
}

