import { expect } from "chai";
import { Problem1 } from "../problems/1/problem1";

describe("Problem1", function () {
    describe("Problem1 - 10", function () {
        it("Problem1", function () {
            const p = new Problem1();
            expect(p.sumDeviders([3, 5], 10)).to.equal(23);
        });
    });

    describe("Problem1 - 1000", function () {
        it("Problem1", function () {
            const p = new Problem1();
            expect(p.sumDeviders([3, 5], 1000)).to.equal(233168);
        });
    });
});