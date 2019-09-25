const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const packageJson = require('../package.json');
const { prompt } = require('enquirer');

async function setup() {
  const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
  const deleteDirectory = dirName => fs.rmdirSync(path.join(__dirname, dirName));
  const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);

  console.log('\n📝  Configuring project display name and bundle identifier...');
  const { displayName, bundleIdentifer } = await prompt([
    {
      type: 'input',
      name: 'displayName',
      message: 'App Display Name (ProjectName):',
    },
    {
      type: 'input',
      name: 'bundleIdentifer',
      message: 'App Bundle Identifier (com.projectname.mobile):',
    },
  ]);

  const { confirmed } = await prompt({
    type: 'confirm',
    name: 'confirmed',
    message: `Continue with => App Display Name: ${displayName} | App Bundle Identifer: ${bundleIdentifer}`,
  });

  if (!confirmed) {
    console.log('\n Cannot continue without choosing a display name and app bundle identifier...');
    console.log('\n Exiting setup...');
  }

  console.log('🔄  Setting up...');
  // add our update to package.json
  const scripts = require('./scripts.json');
  packageJson.scripts = { ...packageJson.scripts, ...scripts };
  packageJson.jest = require('./jest.json');
  packageJson.detox = require('./detox.json');
  packageJson['lint-staged'] = require('./lintStaged.json');

  console.log('\n📝  Writing package.json...');
  writeFile('../package.json', JSON.stringify(packageJson, null, 2));

  console.log('\n🛠  Setting up fastlane and installing app icons...');
  const rootDirectory = path.join(__dirname, '../');
  execSync('bundle install', { cwd: rootDirectory });
  execSync('bundle exec fastlane ios icon', { cwd: rootDirectory });
  execSync('bundle exec fastlane android icon', { cwd: rootDirectory });

  console.log('\n Updating project display name and bundle identifier...');
  execSync(`npx react-native-rename ${displayName} -b ${bundleIdentifer}`, {
    cwd: rootDirectory,
  });

  execSync(
    `fastlane run update_app_identifier app_identifier:"${bundleIdentifer}" plist_path:"${displayName}/Info.plist" xcodeproj:"ios/${displayName}.xcodeproj"`,
    { cwd: rootDirectory },
  );

  console.log('\n🌊  Setting up splash screens...');
  execSync('rm -rf ios/HelloWorld/Base.lproj/LaunchScreen.xib', { cwd: rootDirectory });

  execSync(
    `HYGEN_OVERWRITE=1 yarn hygen setup splashscreen --displayName ${displayName} --bundleIdentifer ${bundleIdentifer}`,
  );

  console.log('\n🗑  Removing cruft...');
  deleteFile('../.flowconfig');
  deleteFile('../App.js');
  deleteFile('../.gitattributes'); // not sure why this is here?
  execSync('rm -rf setup', { cwd: rootDirectory });
  execSync('rm -rf .git', { cwd: rootDirectory }); // blow away old repo if there

  console.log('\n📝 Committing project...');
  execSync(
    'rm -rf .git && git init && git add . && git commit -m "Initialize new React Native project."',
    {
      cwd: rootDirectory,
    },
  );

  console.log('\n📱 Setting initial version @0.0.1 ...');
  execSync('npx react-native-version --never-increment-build', {
    cwd: rootDirectory,
  });

  console.log('\n📝 Committing changes...');
  execSync('git add . && git commit -m "Set proper initial symver version"', {
    cwd: rootDirectory,
  });

  console.log(`\n✅  Setup completed!`);

  console.log('\n\n------------------------');
  console.log('** PostInstall Notes: **');
  console.log('------------------------\n\n');
  console.log(
    "* Ensure you've set up Detox dependencies as instructed here: https://github.com/wix/Detox/blob/master/docs/Introduction.GettingStarted.md#step-1-install-dependencies",
  );
  console.log('\n* Check out the docs folder to customize and finalize your app!');
  console.log('\n');
}

setup();
