'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the groundbreaking ' + chalk.red('generator-cim') + ' generator!'
    ));

    const prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to scaffold a new application?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }
  writing() {
    config: {
      // CREATING THE BUILDS FOLDER
      this.fs.copy(
        this.templatePath('_builds/_development/_css/_style.css'),
        this.destinationPath('builds/development/css/style.css')
      );
      this.fs.copy(
        this.templatePath('_builds/_development/_js/_script.js'),
        this.destinationPath('builds/development/js/script.js')
      );

      this.fs.copy(
        this.templatePath('_builds/_production/_css/_style.css'),
        this.destinationPath('builds/production/css/style.css')
      );
      this.fs.copy(
        this.templatePath('_builds/_production/_js/_script.js'),
        this.destinationPath('builds/production/js/script.js')
      );

      // CREATING THE COMPONENTS FOLDER
      this.fs.copy(
        this.templatePath('_components/_sass/_modules/__scene0.scss'),
        this.destinationPath('components/sass/modules/_scene0.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/_modules/__scene1.scss'),
        this.destinationPath('components/sass/modules/_scene1.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/_modules/__scene2.scss'),
        this.destinationPath('components/sass/modules/_scene2.scss')
      );
      
      this.fs.copy(
        this.templatePath('_components/_sass/__base.scss'),
        this.destinationPath('components/sass/_base.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/__bootstrap.scss'),
        this.destinationPath('components/sass/_bootstrap.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/__layout.scss'),
        this.destinationPath('components/sass/_layout.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/__mixins.scss'),
        this.destinationPath('components/sass/_mixins.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_sass/__variables.scss'),
        this.destinationPath('components/sass/_variables.scss')
      );

      this.fs.copy(
        this.templatePath('_components/_sass/_style.scss'),
        this.destinationPath('components/sass/style.scss')
      );
      this.fs.copy(
        this.templatePath('_components/_scripts/_javascript.js'),
        this.destinationPath('components/scripts/javascript.js')
      );


      // CREATING files
      this.fs.copy(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copy(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
    } // END config
  } // END writing

  install() {
    this.installDependencies();
  } // END install

  // Given destination root is ~/projects
  paths() {
    this.destinationRoot('project');
    // returns '~/projects'

    this.destinationPath('project/index.js');
    // returns '~/projects/index.js'
  }

}; // END generator
