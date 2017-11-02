import sort from '../../src/array/sort';
import tilapia from '../../src/import';
import { expect } from 'chai';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Sort function', () => {

    beforeEach(() => {
        tilapia.use(sort, "devideSort");
    })

    it('should return same when useing sorted array', () => {
        expect([1, 2, 3]["devideSort"]()).to.deep.equal([1, 2, 3]);
    });

    it('should return sorted version when useing unsort array', () => {
        expect([3, 6, 2, 1, 7, 4]["devideSort"]()).to.deep.equal([1, 2, 3, 4, 6, 7]);
    });
});