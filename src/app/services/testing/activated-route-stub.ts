import { ReplaySubject } from 'rxjs';
import { convertToParamMap, ParamMap, Params } from '@angular/router';

/**
 * An ActivateRoute test double with a 'paramMap' observable.
 * Use the 'setParamMap()' method to add the next 'paramMap' Value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the 'paramMap' boservable
  private subject = new ReplaySubject<ParamMap>();

  constructor( initialParams?: Params ) {
      this.setParamMap(initialParams);
  }

  /**The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();

  /** Set the paramMap observables's next value */
  setParamMap( params?: Params ) {
      this.subject.next(convertToParamMap(params));
  }
}