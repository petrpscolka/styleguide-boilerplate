const moment = require("moment");

module.exports = function(eleventyConfig) {

  // ## collection ## ## ## ## ## ## ## ## ## ## ##

  // patterns
  eleventyConfig.addCollection("patterns", function(collection) {
    return collection.getFilteredByGlob([
      "./library/pages/patterns/*.md",
      "./library/pages/patterns/icons/icons.njk",
    ]);
  });

  // template
  eleventyConfig.addCollection("templates", function(collection) {
    return collection.getFilteredByGlob(
      "./library/pages/examples/*.*",
    );
  });

  // limit filter
  eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // date filter
  eleventyConfig.addNunjucksFilter("date", function(date, format) {
    return moment(date).format(format);
  });


  // Base config
  return {
    passthroughFileCopy: false,
    dir: {
      input: "library",
      output: "dist",
      includes: "components"
      // data: "src/lib/lib-data"
    }
  };
};
