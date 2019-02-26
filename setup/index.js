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
const rootDirectory = path.join(__dirname, '../');
execSync('bundle install', { cwd: rootDirectory });
execSync('bundle exec fastlane ios icon', { cwd: rootDirectory });
execSync('bundle exec fastlane android icon', { cwd: rootDirectory });

console.log('\n🌊  Setting up splash screens...');
execSync('rm -rf ios/HelloWorld/Base.lproj/LaunchScreen.xib', { cwd: rootDirectory });
execSync('yarn hygen setup splashscreen');

console.log('\n🗑  Removing cruft...');
deleteFile('../.flowconfig');
deleteFile('../App.js');
deleteFile('../.gitattributes'); // not sure why this is here?
execSync('rm -rf setup', { cwd: rootDirectory });
execSync('rm -rf .git', { cwd: rootDirectory }); // blow away old repo if there

console.log('\n📱 Setting initial version @0.0.1 ...');
execSync(
  'yarn add -D react-native-version && ./node_modules/.bin/react-native-version  --never-increment-build && yarn remove react-native-version',
  {
    cwd: rootDirectory,
  },
);

console.log('\n📝 Committing project...');
execSync(
  'rm -rf .git && git init && git add . && git commit -m "Initialize new React Native project."',
  {
    cwd: rootDirectory,
  },
);

console.log(`\n✅  Setup completed!`);

console.log('\n\n------------------------');
console.log('** PostInstall Notes: **');
console.log('------------------------\n\n');
console.log(
  "* Ensure you've set up Detox dependencies as instructed here: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies",
);
console.log('\n* Check out the docs folder to customize and finalize your app!');
console.log('\n');
