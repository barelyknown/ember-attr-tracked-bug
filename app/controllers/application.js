import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service store;
  
  constructor() {
    super(...arguments);
    this.foo = this.store.createRecord('foo', {});
  }
}
