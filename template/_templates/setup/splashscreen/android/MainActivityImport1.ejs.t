---
inject: true
to: android/app/src/main/java/<%= bundleIdentifer.split('.').join('/').toLowerCase() %>/MainActivity.java
before: import com.facebook.react.ReactActivity;
skip_if: import android.os.Bundle
---
import android.os.Bundle;