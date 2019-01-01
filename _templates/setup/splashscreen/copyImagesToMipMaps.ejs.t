---
sh: "cp <%= cwd %>/_templates/setup/splashscreen/launch_screen.png <%= cwd %>/android/app/src/main/res/mipmap-ldpi/launch_screen.png 
&& cp <%= cwd %>/_templates/setup/splashscreen/launch_screen@2x.png <%= cwd %>/android/app/src/main/res/mipmap-xhdpi/launch_screen.png
&& cp <%= cwd %>/_templates/setup/splashscreen/launch_screen@3x.png <%= cwd %>/android/app/src/main/res/mipmap-xxhdpi/launch_screen.png"
---