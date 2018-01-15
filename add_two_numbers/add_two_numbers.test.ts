import { expect } from "chai";
import "mocha";
import { addTwoNumbers } from "./add_two_numbers";

describe("add two numbers function", () => {
    it ("should equal 1", () => {
      const result = addTwoNumbers([2, 4, 3],  [5, 6, 4]);
      expect(result).to.deep.equal([7, 0, 8 ]);
    });
    it ("should equal 2", () => {
      const result = addTwoNumbers([4, 3],  [5, 6, 4]);
      expect(result).to.deep.equal([9, 9, 4]);
    });
    it ("should equal 3", () => {
      const result = addTwoNumbers([],  [5, 6, 4]);
      expect(result).to.deep.equal([5, 6, 4]);
    });
    it ("should equal 4", () => {
      const result = addTwoNumbers([5, 6, 4], [0]);
      expect(result).to.deep.equal([5, 6, 4]);
    });
});
