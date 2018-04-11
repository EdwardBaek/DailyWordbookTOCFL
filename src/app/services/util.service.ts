import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  
  constructor() { 
    // If we want to use recursive function, function should be binded.
    this.getDeepCopyObject = this.getDeepCopyObject.bind(this);
  }
  
  /* XXX :
  If anyFunction has refer funciont in inside of itself 
  and want to define anyFunction in component as below, 
    anyFunction = this.utilService.anyFunction;
    or
    anyFunction = UtilService.anyFunction;

  Should use prototype instead of this in the function as below
    anyFunction() {
      return UtilService.prototype.anyReferFunciton();
    }
  */

  // Random Number
  getRandom() :number {
    return Math.random();
  }
  getRandomArbitrary(min, max) :number {
    return Math.random() * (max - min) + min;
  }
  getRandomInt(min, max) :number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  getRandomIntInclusive(min, max) :number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  getRandomPositiveIntWithZero(max: number) :number {
    return this.getRandomIntInclusive(0, max);
  }
  getRandomPositiveInt(max: number) {
    return this.getRandomIntInclusive(1, max);
  }
  
  // Array
  getCopyArray(originArray) :any[] {
    // ES5 Recommended
    const cloned = originArray ? originArray.slice() : null;
    // ES6 Recommneded
    // const cloned = originArray ? [...originArray] : null;
    return cloned;
  }

  /**
   * 
   * @param obj : Object and Array
   */
  getDeepCopyObject(obj) :any {
    if(typeof obj === 'object' && !Array.isArray(obj)) {
      return Object.keys(obj)
        .map(key => ({ [key]: this.getDeepCopyObject(obj[key]) }))
        .reduce((a,c) => Object.assign(a,c), {});
    } else if(Array.isArray(obj)) {
      return obj.map(this.getDeepCopyObject)
    }
    return obj;
  }

  hasInputValueInArray(array: any[], value) :boolean {
    array.forEach( (cur, inx) => {
      if( cur === value ) return true;
    });
    return false;
  }

}
