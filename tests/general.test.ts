import { test, expect } from '@playwright/test';
import {GeneralEP} from "../api/endpoints/general-ep";
import {describe} from "node:test";

describe('General Endpoints', () => {

    test('Get home request test', async () => {
        const generalEP = new GeneralEP();
        const resp = await generalEP.getHomeRequest("0d543c36fff95038d4520827ec86e13c2f8ea650");

        expect(resp.status()).toEqual(200);
    });
});
