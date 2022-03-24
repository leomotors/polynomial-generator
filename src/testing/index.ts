// * Internal: Utilities for Testing
import { equal } from "assert";

import { Coefficients, Polynomial } from "..";

export function termsCount(p: Polynomial): number {
    return Object.keys(p.coefficients).length;
}

export function equalTo(p: Polynomial, c: Coefficients): void {
    equal(termsCount(p), Object.keys(c).length);
    for (const [degree, coef] of Object.entries(c)) {
        equal(p.coefficients[+degree], coef);
    }
}

export { BuildTime, Version } from "../config";
