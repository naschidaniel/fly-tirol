/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShippingNoteOrder } from './ShippingNoteOrder';
export type ShippingNote = {
    readonly id?: string;
    orders: Array<ShippingNoteOrder>;
    readonly date_added?: string;
    comment?: string;
    email?: string;
    name?: string;
    address?: string;
    zipcode?: string;
    phone?: string;
    city?: string;
    country?: string;
    status?: ShippingNote.status;
    readonly shippingnote_pdf?: string;
    shippingnote_number?: string;
};
export namespace ShippingNote {
    export enum status {
        OPEN = 'OPEN',
        BULK_ORDER = 'BULK_ORDER',
        SHIPPED = 'SHIPPED',
    }
}

