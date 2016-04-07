// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by telekom-branding.js.
import { name as packageName } from "meteor/telekom-branding";

// Write your tests here!
// Here is an example.
Tinytest.add('telekom-branding - example', function (test) {
  test.equal(packageName, "telekom-branding");
});
