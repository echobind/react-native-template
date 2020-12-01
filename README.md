# `react-native-template`
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

<br />
<p align="center">
  <a href="https://echobind.com">
    <img src="https://camo.githubusercontent.com/d22763c73585cf5d4cf87534659689c2a6b3f214/68747470733a2f2f7265732d332e636c6f7564696e6172792e636f6d2f6372756e6368626173652d70726f64756374696f6e2f696d6167652f75706c6f61642f635f6c7061642c685f3235362c775f3235362c665f6175746f2c715f6175746f3a65636f2f76313439393437333135312f68326b3233696f6f3479687230676a746f636d792e6a7067" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">react-native-template</h3>

  <p align="center">
    Our Recommended template for React Native projects.
    <br />
    <br />
    <a href="https://github.com/echobind/react-native-template/issues">Report Bug</a>
    ·
    <a href="https://github.com/echobind/react-native-template/issues">Request Feature</a>
  </p>
</p>
<div align="center">
  <a href="https://github.com/echobind/react-native-template/graphs/contributors/">
    <img alt="number of contributors." src="https://img.shields.io/github/contributors/echobind/react-native-template.svg" />
  </a>
  <img alt="License." src="https://img.shields.io/github/license/echobind/react-native-template">
</div>

<hr>

## Table of Contents

- [Quickstart](#quickstart)
- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
- [CI/Deployment](#ci--deployment)
- [Docs](#docs)
- [Contributing](#contributing)
- [Publishing New Release](#publish-new-release)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [Contributors](#contributors)

## Quickstart

To get started with our template, run one of the following commands:
```shell
# using npx, install our latest version from npm
npx react-native init MyApp --template=@echobind/react-native-template

# using npx and the github repo directly
npx react-native init MyApp --template=https://github.com/echobind/react-native-template

# using yarn & the react-native cli
yarn global add react-native-cli
react-native init MyApp --template=https://github.com/echobind/react-native-template
```

If you see an error after installing using the first option, pass the flag `--ignore-existing` and run:
```shell
npx --ignore-existing react-native init MyApp --template=@echobind/react-native-template
```

## About The Project

Here at Echobind, we value developer productivity. After having built lots of React Native projects, we decided to put together our own template to speed up development. Our template includes the following:

🏆 Dev Productivity:

- [Hygen](http://www.hygen.io/) templates to easily generate components, screens, and utils with tests and stories.
- vscode settings for common overrides (🎨 Colors, formatOnSave and rulers width that matches prettier)
- default Fastlane scripts for icon generation
- global styles and colors
- `react-navigation` preconfigured with a common setup
- Pre-configured scripts in `package.json` to start the app & deal with simulators
- Setup `lint-staged` to run eslint checks on `precommit`
- Setup the app for TypeScript

We hope it saves you as much time as it saves us! 👍

### Built With

- [React Native `0.61.1`](https://github.com/facebook/react-native)
- [TypeScript](https://www.typescriptlang.org/)
- [`react-navigation`](https://reactnavigation.org/)
- [Storybook 4](https://storybook.js.org/)
- [`@emotion/native`](https://github.com/emotion-js/emotion/tree/master/packages/native) for styling
- [Detox](https://github.com/wix/Detox/) for e2e integration testing

## Getting Started

### Prerequisites

While not required, we recommend using a version manager for Ruby and Node. Some popular version managers are:

** Ruby **

- (chruby)[https://github.com/postmodern/chruby]
- (rbenv)[https://github.com/rbenv/rbenv]

** Node **

- [nodenv](https://github.com/nodenv/nodenv)
- [nvm](https://github.com/nvm-sh/nvm)

Follow the install docs for the version manager of your choice.

During the setup proceess, we will automatically check the versions on your machine and prompt you to install anything you're missing.

### Usage

In order to use this template, follow these steps:

1. Initialize a new react-native app: `npx react-native init MyApp --template=https://github.com/echobind/react-native-template`
2. Change directories into your new app: `cd MyApp`
3. Run the setup script: `node ./setup`. A successful setup will give you the green light: `✅ Setup completed!`

During the setup process we will do the following:

- Setup a display name for your app
- Setup a bundle identifier (ex: com.myapp.mobile)
- Use [Solidarity](https://github.com/infinitered/solidarity) to ensure your environment has all expected dependencies installed
- Run `bundle install` and `pod install` so you don't have to
- Setup placeholder icon and a splash screen
- Setup the first integration test which can be run with the scripts from your package.json with `yarn e2e:ios-debug` or `yarn e2e:android-debug` (android emulator must be setup and open)

## Template Preview
on an iPhone 12: 

<img src="template/splashScreenPreview/SplashScreens-iPhone12.gif" alt="iphone12 splash screen preview" height="600px"  />

## CI / Deployment:

In order to set up CI/Deployment, we've created custom hygen templates to save you time. These live in our [`hygen-templates-echobind` repository](https://github.com/echobind/hygen-echobind-templates). You'll find installation instructions, which will allow you to set up the following:

- CircleCI preconfigured for React Native. Fast build times!
- Fastlane lanes for alpha, beta, and production releases. These should be run on CI only!
- AppCenter integration for easy alpha distribution

After installing those, head into the "Setup CircleCI" docs in [`./docs/circle-ci.md`](./template/docs/circle-ci.md), which will walk you through the installation.

For more info, please follow the [instructions](https://github.com/echobind/hygen-echobind-templates) in the `hygen-templates-echobind` repo.

## Docs

- [Customize Generator Templates](./template/docs/hygen-templates.md)
- [Navigation](./template/docs/navigation.md)
- [Splash Screens](./template/docs/splashscreens.md)
- [Setup CircleCI](./template/docs/circle-ci.md)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Publish New Release

This template is available on npm at [`@echobind/react-native-template`](https://www.npmjs.com/package/@echobind/react-native-template). In order to publish a new release, please follow this process:

### Prerequisites

1. You must be an Echobind employee
2. You must have an [npm registry account](https://www.npmjs.com/signup)
2. You must be a member of the @echobind organization on npm

### Create a New Release

This is handled by `semantic-release` and CircleCI. When a commit is merged into `master`, it analyzes it, then runs a new release based on the type of commit (i.e fix is a patch whereas feat is considered a minor or feature relase).

## Acknowledgements

We'd like to thank the internal team for making this template, and the following organizations:

- React Native Team
- React Native Community
- [Img Shields](https://shields.io)


## License

The Echobind React Native template is open source software [licensed as MIT](./LICENSE.md).


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://mikecavaliere.com/"><img src="https://avatars3.githubusercontent.com/u/147237?v=4" width="100px;" alt=""/><br /><sub><b>Mike Cavaliere</b></sub></a><br /><a href="https://github.com/echobind/react-native-template/commits?author=mcavaliere" title="Code">💻</a> <a href="https://github.com/echobind/react-native-template/pulls?q=is%3Apr+reviewed-by%3Amcavaliere" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/cmejet"><img src="https://avatars3.githubusercontent.com/u/7119624?v=4" width="100px;" alt=""/><br /><sub><b>Jenn</b></sub></a><br /><a href="https://github.com/echobind/react-native-template/commits?author=cmejet" title="Code">💻</a> <a href="https://github.com/echobind/react-native-template/pulls?q=is%3Apr+reviewed-by%3Acmejet" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="http://echobind.com"><img src="https://avatars1.githubusercontent.com/u/14339?v=4" width="100px;" alt=""/><br /><sub><b>Chris Ball</b></sub></a><br /><a href="https://github.com/echobind/react-native-template/commits?author=cball" title="Code">💻</a> <a href="https://github.com/echobind/react-native-template/pulls?q=is%3Apr+reviewed-by%3Acball" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/rynatk/"><img src="https://avatars0.githubusercontent.com/u/13787517?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Atkinson</b></sub></a><br /><a href="https://github.com/echobind/react-native-template/commits?author=rynatk" title="Code">💻</a> <a href="https://github.com/echobind/react-native-template/pulls?q=is%3Apr+reviewed-by%3Arynatk" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
