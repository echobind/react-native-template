# Splash Screens

We've setup [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) for you! To customize it, follow the steps below.

## iOS

1. Create a 240px x 240px image @ 1x, 2x, and 3x sizes.
2. Open the project in Xcode.
3. Navigate to the `SplashScreen` image asset, and replace the items with your own:

![Changing Splash Image](https://monosnap.com/image/3yXqqL7NpQuyHvavHcwlJMGwShnPhA.png)

4. Update the background color or centering of the image by opening `LaunchScreen.xib` and adjusting the necessary properties:

   ![Updating Background](https://monosnap.com/image/PmScO75OOi1UaJgilexVL5TMYBRq3o.png)

   ![Updating Image](https://monosnap.com/image/a2YSVnuwvfRDlnS4CuB34kOhXGioIr.png)

## Android

1. Copy your 1x, 2x and 3x image assets into the proper mipmap folders (ldpi, xhdpi, and xxhdpi respectively)

   ![Adding images to Android folders](https://monosnap.com/image/AfviJGhxGZlw6xermUurFQVSUJ8pC5.png)

2. Update the color by changing the `launch_background` color in `android/app/src/main/res/values/colors.xml`.
