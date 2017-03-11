(function() {
  'use strict';
  var path = require('../app/findMinMax.js');

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(path.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(path.findMinMax([6, 4])).toEqual([4, 6]);
      });
      it('should return [24, 50] for [25, 24, 50, 4, 38]', function () {
        expect(path.findMinMax([25, 24, 50, 38])).toEqual([24, 50]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(path.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [0,58] for [2,4,8,20,50,0,25,58]', function () {
        expect(path.findMinMax([2,4,8,20,50,0,25,58])).toEqual([0, 58]);
      });
      it('should return [7,65] for [7,20,28,59,10,25,65]', function () {
        expect(path.findMinMax([7,20,28,59,10,25,65])).toEqual([7, 65]);
      });
      it('should return [1.25, 95.4] for [1.25, 2.60, 3.58, 95.4, 14.25]', function () {
        expect(path.findMinMax([1.25, 2.60, 3.58, 95.4, 14.25])).toEqual([1.25, 95.4]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(path.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [7] for [7]', function () {
        expect(path.findMinMax([7])).toEqual([7]);
      });
      it('should return [0] for [0,0,0,0]', function () {
        expect(path.findMinMax([0])).toEqual([0]);
      });

    });

  });

})();