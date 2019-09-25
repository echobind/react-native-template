# `react-native-template-echobind`

<br />
<p align="center">
  <a href="https://echobind.com">
    <img src="https://camo.githubusercontent.com/d22763c73585cf5d4cf87534659689c2a6b3f214/68747470733a2f2f7265732d332e636c6f7564696e6172792e636f6d2f6372756e6368626173652d70726f64756374696f6e2f696d6167652f75706c6f61642f635f6c7061642c685f3235362c775f3235362c665f6175746f2c715f6175746f3a65636f2f76313439393437333135312f68326b3233696f6f3479687230676a746f636d792e6a7067" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">react-native-template-echobind</h3>

  <p align="center">
    Our Recommended template for React Native projects.
    <br />
    <br />
    <a href="https://github.com/echobind/react-native-template-echobind/issues">Report Bug</a>
    ·
    <a href="https://github.com/echobind/react-native-template-echobind/issues">Request Feature</a>
  </p>
</p>
<div align="center">
  <a href="https://github.com/echobind/react-native-template-echobind/graphs/contributors/">
    <img alt="number of contributors." src="https://img.shields.io/github/contributors/echobind/react-native-template-echobind.svg" />
  </a>
  <img alt="license." src="https://img.shields.io/github/license/echobind/react-native-template-echobind.svg" />
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
- [CI/Deployment](#ci-/-deployment)
- [Docs](#docs)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

## Quickstart

```shell
# with npx
npx react-native init MyApp --template=https://github.com/echobind/react-native-template-echobind

# with yarn & the react-native cli
yarn global add react-native-cli
react-native init MyApp --template=https://github.com/echobind/react-native-template-echobind
```

## About The Project

Here at Echobind, we value developer productivity. After having built lots of React Native projects, we decided to put together our own template to speed up development. Our template includes the following:

🏆 Dev Productivity:

- [Hygen](http://www.hygen.io/) templates to easily generate components, screens, and utils with tests and stories.
- Reactotron pre-configured for [React Native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) and [Storybook](https://github.com/infinitered/reactotron/blob/master/docs/plugin-storybook.md)
- vscode settings for common overrides (🎨 Colors, formatOnSave and rulers width that matches prettier)
- default Fastlane scripts for icon generation
- global styles and colors
- `react-navigation` preconfigured with a common setup

We hope it saves you as much time as it saves us! 👍

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [React Native `0.61.1`](https://github.com/facebook/react-native)
- [TypeScript](https://www.typescriptlang.org/)
- [`react-navigation`](https://reactnavigation.org/)
- [Storybook 4](https://storybook.js.org/)
- [`@emotion/native`](https://github.com/emotion-js/emotion/tree/master/packages/native) for styling

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

In order to use this template properly, you'll need to first do the following:

1. Install the react-native-cli package if you haven't already: `yarn global add react-native-cli`
2. Install Ruby and a version manager (like RVM or rbenv) if you don't already have them on your machine:

   Ruby: `$ brew install ruby`

   For RVM: `\curl -sSL https://get.rvm.io | bash`

   For rbenv: `brew install rbenv` ... and then setup your shell: `rbenv init`.

   Close your terminal and open a new one.

3. Install GraphicsMagick: `brew install graphicsmagick`. (used to generate splash screens)
4. Install [Cocoapods](https://guides.cocoapods.org/using/getting-started.html#installation): `sudo gem install cocoapods`

### Usage

In order to use this template, follow these steps:

1. Initialize a new react-native app: `react-native init MyApp --template=https://github.com/echobind/react-native-template-echobind`
2. Change directories into your new app: `cd MyApp`
3. Run `bundle install`
4. Run the setup script: `node ./setup`. A successful setup will give you the green light: `✅ Setup completed!`

## CI / Deployment:

In order to set up CI/Deployment, we've created custom hygen templates to save you time. These live in our [`hygen-templates-echobind` repository](https://github.com/echobind/hygen-echobind-templates). You'll find installation instructions, which will allow you to set up the following:

- CircleCI preconfigured for React Native. Fast build times!
- Fastlane lanes for alpha, beta, and production releases. These should be run on CI only!
- AppCenter integration for easy alpha distribution

After installing those, head into the "Setup CircleCI" docs in [`./docs/circle-ci.md`](./docs/circle-ci.md), which will walk you through the installation.

For more info, please follow the [instructions](https://github.com/echobind/hygen-echobind-templates) in the `hygen-templates-echobind` repo.

## Docs

- [Customize Generator Templates](./docs/hygen-templates.md)
- [Navigation](./docs/navigation.md)
- [Splash Screens](./docs/splashscreens.md)
- [Setup CircleCI](./docs/circle-ci.md)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgements

We'd like to thank the internal team for making this template, and the following organizations:

- React Native Community
- [Img Shields](https://shields.io)

## License

The Echobind React Native template is open source software [licensed as MIT](./LICENSE.md).
