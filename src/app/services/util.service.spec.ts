import { TestBed, inject } from '@angular/core/testing';

import { UtilService } from './util.service';



describe('UtilService', () => {
  let service: UtilService;

  beforeEach(() => {
    service = new UtilService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('copy values', () => {
    let tempArray: any[] = [];
    let array: any[]= [];
    let arrayWithObject: any[]= [];
    let arrayData: any[]= [];

    let tempObj: any = {};
    let obj: any = {};
    let objWithArray: any = {};
    let objWithObject: any = {};

    beforeEach(() => {
      tempArray = [];
      array = [1,2,3,4,5];
      arrayWithObject = [{id:1, name:1},{id:2, name:2},{id:3, name:3},{id:4, name:4}];
      arrayData = [
        {version:1, data: 
          [
            {id:1, name:1}, {id:2, name:2}, {id:3, name:3}, {id:4, name:4}
          ]
        }
      ];

      tempObj = {};
      obj = {id:1};
      objWithArray = {data:[{id:1, name:1}, {id:2, name:2}, {id:3, name:3}]};
      objWithObject = { data : {id:1, name:1} };

    });
    describe('#getCopyArray(swallow copy) ', () => {
      it('should copy array of reference copy.', () => {
        tempArray = service.getCopyArray(array);
        expect(tempArray.indexOf(array[0])).not.toBe(-1, 'array copy');
        
        tempArray[0] = 10;
        expect(tempArray.indexOf(array[0])).toBe(-1, 'swallow copy should change value');
        expect(tempArray[0]).not.toEqual(array[0], 'swallow copy should change value');
        
        tempArray = [];
        tempArray = service.getCopyArray(arrayWithObject);
        expect(tempArray.indexOf(arrayWithObject[0])).not.toBe(-1, 'arrayWithObject copy');
        
        tempArray = [];
        tempArray = service.getCopyArray(arrayData);
        expect(tempArray.indexOf(arrayData[0])).not.toBe(-1, 'arrayData copy');
      });
  
      it('should not copy value of object inside of array.', () => {
        tempArray = service.getCopyArray(array);
        expect(tempArray.indexOf(array[0])).not.toBe(-1, 'xxx');
  
      });
    });

    describe('#getDeepCopyObject', () => {
      it('should copy value of object', () => {
        tempObj = service.getDeepCopyObject(obj);
        expect(tempObj).not.toBe(obj, 'copied obj not have the same refence address');
        expect(tempObj.id).toEqual(obj.id), 'copied obj should have the same value';
      });

      it('should copy value of objWithArray', () => {
        tempObj = {};
        tempObj = service.getDeepCopyObject(objWithArray);

        expect(tempObj.data).not.toBe(objWithArray.data, 'copied objWithArray.data should not have the same refence address');

        expect(tempObj.data).toEqual(objWithArray.data, 'copied objWithArray.data should have the same value');

        expect(tempObj.data[0]).not.toBe(objWithArray.data[0], 'copied objWithArray.data[0] should not have the same refence address');

        expect(tempObj.data[0]).toEqual(objWithArray.data[0], 'objWithArray.data[0] should have the same value');

        tempObj.data[0].name = 10;
        expect(tempObj.data[0].name).not.toEqual(objWithArray.data[0].name, 'should not the same value after change of copied value');
      });

      it('should copy simple array', () => {

        expect(tempArray).toEqual([],'check default value');
        expect(Array.isArray(array)).toBe(true, 'array is Array');
        expect(Array.isArray(tempArray)).toBe(true, 'tempArray is Array');
        
        tempArray = service.getDeepCopyObject(array);

        expect(Array.isArray(tempArray)).toBe(true, 'tempArray is Array');
        expect(tempArray.indexOf(array[0])).not.toBe(-1, 'copied value in array should have the same value');
      });

      it('should copy value of array', () => {
        tempArray = [];
        tempArray = service.getDeepCopyObject(arrayWithObject);
        expect(tempArray[0]).not.toBe(arrayWithObject[0], 'copied array should not have the same reference address.');
      });

    });
    

    xit('', () => {
    });


    afterEach(() => {
      array = undefined;
      arrayWithObject = undefined;
      arrayData = undefined;
      tempArray = undefined;  

      tempObj = undefined;
      obj = undefined;
      objWithArray = undefined;
      objWithObject = undefined;
    });

  });
  

  afterEach(() => {
    service = undefined;
  });

});
