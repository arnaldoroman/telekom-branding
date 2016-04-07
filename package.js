Package.describe({
  name: 'marcelfahle:telekom-branding',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'The current Telekom Branding Assets',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/marcelfahle/telekom-branding',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('telekom-branding.js');
  api.addAssets([
    'fonts/telegrotesk-fett.eot',
    'fonts/telegrotesk-fett.svg',
    'fonts/telegrotesk-fett.ttf',
    'fonts/telegrotesk-fett.woff',
    'fonts/telegrotesk-halbfett.eot',
    'fonts/telegrotesk-halbfett.svg',
    'fonts/telegrotesk-halbfett.ttf',
    'fonts/telegrotesk-halbfett.woff',
    'fonts/telegrotesk-normal.eot',
    'fonts/telegrotesk-normal.svg',
    'fonts/telegrotesk-normal.ttf',
    'fonts/telegrotesk-normal.woff',
    'fonts/telegrotesk-ultra.eot',
    'fonts/telegrotesk-ultra.svg',
    'fonts/telegrotesk-ultra.ttf',
    'fonts/telegrotesk-ultra.woff',
    'fonts/teleicon-outline.eot',
    'fonts/teleicon-outline.svg',
    'fonts/teleicon-outline.ttf',
    'fonts/teleicon-outline.woff',
    'fonts/teleicon-solid.eot',
    'fonts/teleicon-solid.svg',
    'fonts/teleicon-solid.ttf',
    'fonts/teleicon-solid.woff',
    'fonts/teleicon-ui.eot',
    'fonts/teleicon-ui.svg',
    'fonts/teleicon-ui.ttf',
    'fonts/teleicon-ui.woff'
  ], 'client');
  api.addFiles('telekom.branding.scss');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('marcelfahle:telekom-branding');
  api.mainModule('telekom-branding-tests.js');
});
