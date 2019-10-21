const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { prompt } = require('enquirer');

async function setup() {
  const deleteFile = fileName => fs.unlinkSync(path.join(__dirname, fileName));
  const deleteDirectory = dirName => fs.rmdirSync(path.join(__dirname, dirName));
  const writeFile = (fileName, data) => fs.writeFileSync(path.join(__dirname, fileName), data);

  console.log('\n🤔 Checking system setup and prerequisites...');
  try {
    execSync('yarn solidarity --verbose', { stdio: 'inherit' });
  } catch {
    // Bail if solidarity checks fail
    return;
  }

  console.log('\n📝  Configuring project display name and bundle identifier...');
  const { displayName } = await prompt({
    type: 'input',
    name: 'displayName',
    message: 'App Display Name (ProjectName):',
    initial: 'HelloWorld',
  });

  const { bundleIdentifer } = await prompt({
    type: 'input',
    name: 'bundleIdentifer',
    message: 'App Bundle Identifier',
    initial: displayName.toLowerCase() || 'helloworld',
  });

  const { confirmed } = await prompt({
    type: 'confirm',
    name: 'confirmed',
    message: `Continue with => App Display Name: ${displayName} | App Bundle Identifer: ${bundleIdentifer}`,
  });

  if (!confirmed) {
    console.log('\n Cannot continue without choosing a display name and app bundle identifier...');
    console.log('\n Exiting setup...');
    return;
  }

  const { shouldInitializeGitRepository } = await prompt({
    type: 'confirm',
    name: 'shouldInitializeGitRepository',
    message: 'Would you like to initialize this project as a git repository?',
  });

  console.log('🔄  Setting up...');

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
    `bundle exec fastlane run update_app_identifier app_identifier:"${bundleIdentifer}" plist_path:"${displayName}/Info.plist" xcodeproj:"ios/${displayName}.xcodeproj"`,
    { cwd: rootDirectory },
  );

  console.log('\n☕  Installing Cocoapods...');
  execSync('bundle exec pod install', { cwd: 'ios' });

  console.log('\n🍎🌊  Setting up ios splash screens...');
  execSync('rm -rf ios/FamilyDirectedTest/Base.lproj/LaunchScreen.xib', {
    cwd: rootDirectory,
  });
  execSync(
    `HYGEN_OVERWRITE=1 yarn hygen setup splashscreen ios --displayName ${displayName} --bundleIdentifer ${bundleIdentifer}`,
  );

  console.log('\n🤖🌊  Setting up android splash screens...');
  execSync(
    `HYGEN_OVERWRITE=1 yarn hygen setup splashscreen android --displayName ${displayName} --bundleIdentifer ${bundleIdentifer}`,
  );

  console.log('\n🗑  Removing cruft...');
  deleteFile('../.flowconfig');
  deleteFile('../App.js');
  deleteFile('../.gitattributes'); // not sure why this is here?
  execSync('rm -rf setup', { cwd: rootDirectory });
  execSync('rm -rf .git', { cwd: rootDirectory }); // blow away old repo if there

  if (shouldInitializeGitRepository) {
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
  }

  console.log(`\n✅  Setup completed!`);

  console.log('\n\n------------------------');
  console.log('** PostInstall Notes: **');
  console.log('------------------------\n\n');
  console.log('\n* Check out the docs folder to customize and finalize your app!');
  console.log('\n');
}

setup();
