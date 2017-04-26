import Ember from 'ember';
import layout from '../templates/components/pa-responsive-menu';

export default Ember.Component.extend({
  /** @member tag type */
  layout: layout,

  /** @member Class names */
  classNames:['pa-responsive-menu','menu-container'],


  dropdown:false,
  orientation:'vertical medium-horizontal',
});
