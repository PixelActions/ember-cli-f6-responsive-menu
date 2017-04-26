# ember-cli-f6-responsive-menu

## Usage

### Install dependencies

* `ember install ember-cli-sass` 
* `ember install git+https://github.com/PixelActions/ember-cli-foundation-6-sass.git` 

### Installation

* `ember install <repository-url>` 
* `@import 'pa-responsive-menu';` in your app.scss to use the default styling.

### Adding the menu

Add the menu in your application.hbs by supplying a list of <li> items to be your menu items. E.g:

```
{{#pa-responsive-menu logoURL="/assets/img/logo.png" orientation='vertical large-horizontal' useContainer=false}}
<li>{{#link-to 'index'}}Home{{/link-to}}</li>
<li>{{#link-to 'areas-of-practice.index'}}Areas of Practice{{/link-to}}</li>

<li>{{#link-to 'the-firm'}}The Firm{{/link-to}}</li>
<li>{{#link-to 'partners'}}Partners{{/link-to}}</li>
<li>{{#link-to 'contact'}}Contact Us{{/link-to}}</li>
{{/pa-responsive-menu}}
```
### Settings

The following parameters can be passed to the component to customize it's behavior:

* `logoURL`: path to the logo file
* `orientation`: foundation-6 classes for the menu orientation (default: 'vertical medium-horizontal')
* `useContainer`: whether to use 'row column' around the menu. (default: true)

For customizing the design of the menu, aside overriding css yourself, you may provide certain variable values to control the output. Make sure you place the variables prior the @import statement for the menu scss.

* `rm-logo-max-width`: Controls logo max-width
* `top-bar-height`: If present, it defines the top bar height. (Default: 30px)


# For collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-f6-responsive-menu`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
