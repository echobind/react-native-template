---
inject: true
to: android/app/src/main/java/com/<%= 'HelloWorld'.toLowerCase() %>/MainActivity.java
after: import com.facebook.react.ReactActivity;
skip_if: import org.devio.rn.splashscreen.SplashScreen;
---
import org.devio.rn.splashscreen.SplashScreen;