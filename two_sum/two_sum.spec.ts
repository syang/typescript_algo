import { two_sum } from './two_sum';
import { expect } from 'chai';
import 'mocha';

describe('two_sum function', () => {
      it('should equal 1', () => {
        const result = two_sum(5, [1,2,4,7]);
        // console.log("Hi, result = ", result);
        expect(result).to.deep.equal([ 0, 2 ]);
      });
      it('should equal 2', () => {
        const result = two_sum(6, [1,2,4,7]);
        // console.log("Hi, result = ", result);
        expect(result).to.deep.equal([ 1, 2 ]);
      });
        
});