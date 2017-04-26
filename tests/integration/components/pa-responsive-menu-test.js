import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pa-responsive-menu', 'Integration | Component | pa responsive menu', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pa-responsive-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pa-responsive-menu}}
      template block text
    {{/pa-responsive-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
