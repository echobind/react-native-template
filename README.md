# react-native-template-echobind

Our Recommended template for React Native projects.

## Included

📓 Libraries:

- React Native 0.57
- TypeScript
- react-navigation
- Storybook 4
- Emotion Native for styling

🏆 Dev Productivity:

- [Hygen](http://www.hygen.io/) templates to easily generate components, screens, and utils with tests and stories.
- Reactotron pre-configured for [React Native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) and [Storybook](https://github.com/infinitered/reactotron/blob/master/docs/plugin-storybook.md)
- vscode settings for common overrides (🎨 Colors, formatOnSave and rulers width that matches prettier)
- default Fastlane scripts for icon generation
- global styles and colors
- react-navigation preconfigured with a common setup

🤖 CI / Deployment:

- CircleCI preconfigured for React Native. Fast build times!
- Fastlane lanes for alpha, beta, and production releases. These should be run on CI only!
- AppCenter integration for easy alpha distribution

## Setup

1. Initialize a new react-native app: `react-native init MyApp --template=https://github.com/echobind/react-native-template-echobind`
2. Install Ruby and a version manager (like RVM or rbenv) if you don't already have them on your machine:

   Ruby: `$ brew install ruby`

   For RVM: `\curl -sSL https://get.rvm.io | bash`

   For rbenv: `brew install rbenv` ... and then setup your shell: `rbenv init`.

   Close your terminal and open a new one.

3. Install GraphicsMagick `brew install graphicsmagick`.
4. Run `bundle install`.
5. Run the setup script: `node ./setup`. A successful setup will give you the green light: `✅ Setup completed!`.

---

## Docs

- [Customize Generator Templates](./docs/hygen-templates.md)
- [Navigation](./docs/navigation.md)
- [Splash Screens](./docs/splashscreens.md)
- [Setup CircleCI](./docs/circle-ci.md)

---

## Local Development

- Generate a new app against your local repo using the `file://` option of `--template`:

  `react-native init --template=file://path/to/my/repo`
