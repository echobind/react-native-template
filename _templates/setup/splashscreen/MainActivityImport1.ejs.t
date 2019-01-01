---
inject: true
to: android/app/src/main/java/com/<%= 'HelloWorld'.toLowerCase() %>/MainActivity.java
before: import com.facebook.react.ReactActivity;
skip_if: import android.os.Bundle
---
import android.os.Bundle;