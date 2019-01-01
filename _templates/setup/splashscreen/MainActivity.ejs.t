---
inject: true
to: android/app/src/main/java/com/<%= 'HelloWorld'.toLowerCase() %>/MainActivity.java
after: public class MainActivity extends ReactActivity
skip_if: protected void onCreate
---
    /**
     * Injection for react-native-splashscreen
     * see: https://github.com/crazycodeboy/react-native-splash-screen#third-stepplugin-configuration
     */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
    }