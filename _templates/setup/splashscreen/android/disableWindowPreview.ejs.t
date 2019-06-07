---
# This is needed to fix a "flash of white" before the splashscreen is shown
inject: true
to: android/app/src/main/res/values/styles.xml
after: Customize your theme here
skip_if: windowDisablePreview
---
        <item name="android:windowDisablePreview">true</item>