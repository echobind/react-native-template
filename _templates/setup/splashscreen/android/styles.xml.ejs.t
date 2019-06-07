---
inject: true
to: android/app/src/main/res/values/styles.xml
before: \<\/resources\>
skip_if: Splash screen theme
---
    <!-- Splash screen theme -->
    <style name="SplashScreenTheme" parent="SplashScreen_SplashTheme">
        <!-- 
            colorPrimaryDark is used for status bar, app bars, etc.
            The actual color is defined in colors.xml
        -->
        <item name="colorPrimaryDark">@color/status_bar_color</item>
    </style>