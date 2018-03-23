import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  
  constructor() { 
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
  getRandom() {
    return Math.random();
  }
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  getRandomPositiveIntWithZero(max: number) {
    return this.getRandomIntInclusive(0, max);
  }
  getRandomPositiveInt(max: number) {
    return this.getRandomIntInclusive(1, max);
  }
  
  // Array
  getCopyArray(originArray){
    let cloned = originArray ? originArray.slice() : null;
    // let cloned = originArray.map(x => Object.assign({}, x));
    return cloned;
  }
  hasInputValueInArray(array: any[], value) :boolean {
    array.forEach( (cur, inx) => {
      if( cur == value ) return true;
    });
    return false;
  }

}
