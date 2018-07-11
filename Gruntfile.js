module.exports = function (grunt) {
  grunt.initConfig({
    cucumberjs: {
      options: {
        //modulePath: '../node_modules/grunt-cucumber/node_modules/cucumber/lib/cucumber.js',
        // task options
        standalone: true,
        steps: 'tests/step_definitions',
        support: 'tests/helpers',
        format: 'html',
        output: 'tests/reports/test_report.html',
        theme: 'bootstrap',
        // download settings
        //jar_version: '3.13.0',
        //jar_url: 'node_modules/selenium-server/lib/selenium-server-standalone-3.13.0.jar',
        globals_path: 'tests/helpers/globals.js',
        custom_commands_path: '',
        custom_assertions_path: '',
        output_folder: 'tests/reports',
        test_settings: {},
        selenium: {}
      },
      features: [],
      /*custom: {
        // custom target + overrides
        config_path: 'package.json',
      }*/
    }
  });

  grunt.loadNpmTasks('grunt-nightwatch');
  grunt.loadNpmTasks('grunt-cucumberjs');
};