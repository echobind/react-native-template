# Hygen Templates

Templates can be found in the `_templates` directory at the root of the project. They are customizable generators that are meant to evolve alongside your code.

Out of the box, we've wired up:

- A component generator (`yarn g:component Button`). This will:
  - Prompt you if you want a functional or stateful component
  - add a Storybook story
- A screen generator (`yarn g:screen LoginScreen`). This will:
  - Create a screen file that uses a general Screen wrapper component.
- A util generator (`yarn g:util happy). This will:
  - Create a simple util function with a corresponding jest test. This will fail by default to encourage you to write them!
- An E2E generator (`yarn g:e2e "My cool e2e test"`). This will:
  - Create a detox test in the `e2e` directory.

We maintain additional templates related to CircleCi and Fastlane in the [`hygen-echobind-templates`](https://github.com/echobind/hygen-echobind-templates). You'll find instructions in that repository on how to use them to generate configs for your project.
