import { describe, expect, it } from "chai";
import "mocha";
import { twoSum } from "./two_sum";

describe("two_sum function", () => {
      it("should equal 1", () => {
        const result = twoSum(5, [1, 2, 4, 7]);
        // console.log("Hi, result = ", result);
        expect(result).to.deep.equal([ 0, 2 ]);
      });
      it("should equal 2", () => {
        const result = twoSum(6, [1, 2, 4, 7]);
        // console.log("Hi, result = ", result);
        expect(result).to.deep.equal([ 1, 2 ]);
      });
});
