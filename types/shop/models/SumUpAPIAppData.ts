/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SumUpAPIAppData = {
    type?: SumUpAPIAppData.type;
    code: string;
    refresh_token: string;
    readonly refresh_token_created?: string;
    merchant_code: string;
    username: string;
};
export namespace SumUpAPIAppData {
    export enum type {
        BACKEND = 'BACKEND',
        FRONTEND = 'FRONTEND',
    }
}

