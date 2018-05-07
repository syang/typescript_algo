import { expect } from "chai";
import "mocha";
import { longestSubString } from "./longest_substring";

describe("test functions", () => {
    it("should equal 3", () => {
        const result = longestSubString("testtest");
        // console.log("Hi, result = ", result);
        expect(result).to.equal(3);
    });
    it("should equal 1", () => {
        const result = longestSubString("bbb");
        // console.log("Hi, result = ", result);
        expect(result).to.equal(1);
    });
    it("pwwkew should result 3", () => {
        const result = longestSubString("pwwkew");
        // console.log("Hi, result = ", result);
        expect(result).to.equal(3);
    });
});
