# Navigation

This project uses react-navigation for navigating in the app. Out of the box, navigation consists of a few main concepts.

![Navigator Structure](https://monosnap.com/image/fCFp1XBi98Zy7HR9ZVJcPa1KEozeQI.png)

## Root Nav

This navigator is rendered at the root of the app. It is a [SwitchNavigator](https://reactnavigation.org/docs/en/switch-navigator.html) and has 1 main responsibility: to take a `currentUser` object and render either an [Main Nav](#app-nav) or a [Guest Nav](#guest-nav) [StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html).

## Guest Nav

This nav is a [StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html) that renders when a user is logged out of your app. Guest Nav screens typically consist of:

- Onboarding
- Registration
- Login
- Forgot Password

## App Nav

This nav is a [StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html) that contains only the [Main Nav](#main-nav) by default. If you have any full screen modals that should render above the main nav UI, you should put them here.

## Main Nav

Main Nav is meant to be the main interface of the app. By default it renders a [BottomTabNavigator](https://reactnavigation.org/docs/en/bottom-tab-navigator.html).

## Onboarding Nav (optional)

This nav is a [StackNavigator](https://reactnavigation.org/docs/en/stack-navigator.html) that is meant to handle onboarding. We keep it as a separate stack from the [Guest Nav](#guest-nav). If your app doesn't need onboarding, feel free to delete this nav.
