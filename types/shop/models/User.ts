/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type User = {
    readonly id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    role?: User.role;
    readonly is_authenticated?: string;
};

export namespace User {

    export enum role {
        CUSTOMER = 'CUSTOMER',
        SHOPADMIN = 'SHOPADMIN',
        STAFF = 'STAFF',
    }


}

