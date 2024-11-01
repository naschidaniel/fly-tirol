/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
    readonly id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username?: string;
    email?: string;
    role?: User.role;
    readonly is_authenticated?: string;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     */
    is_active?: boolean;
    gender?: string;
    first_name?: string;
    last_name?: string;
    address?: string;
    city?: string;
    zipcode?: string;
    country?: string;
    phone?: string;
    is_email_verified?: boolean;
    shipping_gender?: string;
    shipping_first_name?: string;
    shipping_last_name?: string;
    shipping_address?: string;
    shipping_city?: string;
    shipping_zipcode?: string;
    shipping_country?: string;
    shipping_phone?: string;
};
export namespace User {
    export enum role {
        CUSTOMER = 'CUSTOMER',
        SHOPADMIN = 'SHOPADMIN',
        SYSTEM = 'SYSTEM',
        STAFF = 'STAFF',
    }
}

