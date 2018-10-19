const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const packageJson = require('../package.json');

const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
const deleteDirectory = dirName => fs.rmdirSync(path.join(__dirname, dirName));
const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);

console.log('🔄  Setting up...');

// add our update to package.json
const scripts = require('./scripts.json');
packageJson.scripts = { ...packageJson.scripts, ...scripts };
packageJson.jest = require('./jest.json');
packageJson.detox = require('./detox.json');
packageJson['lint-staged'] = require('./lintStaged.json');
packageJson.rnpm = require('./rnpm.json');

console.log('\n📝  Writing package.json...');
writeFile('../package.json', JSON.stringify(packageJson, null, 2));

console.log('\n🛠  Setting up fastlane and installing app icons...');
const bundleDirectory = path.join(__dirname, '../');
execSync('bundle install', { cwd: bundleDirectory });
execSync('bundle exec fastlane ios icon', { cwd: bundleDirectory });
execSync('bundle exec fastlane android icon', { cwd: bundleDirectory });

console.log('\n🗑  Removing cruft...');
deleteFile('../.flowconfig');
deleteFile('jest.json');
deleteFile('detox.json');
deleteFile('lintStaged.json');
deleteFile('rnpm.json');
deleteFile('scripts.json');
deleteFile('index.js');
deleteFile('../App.js');
deleteDirectory('.');

console.log(`\n✅  Setup completed!`);

console.log('\n\n------------------------');
console.log('** PostInstall Notes: **');
console.log('------------------------\n\n');
console.log(
  "1. Ensure you've set up Detox dependencies as instructed here: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies",
);
console.log('\n2. Add custom fonts to src/assets/fonts and run `react-native link`');
console.log('\n3. TODO');
console.log('\n');
