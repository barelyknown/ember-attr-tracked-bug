import DS from 'ember-data';
const { Model, attr } = DS;

export default class User extends Model {
  @attr('string') bar;

  get isBarBaz() {
    return this.bar === "baz";
  }
}