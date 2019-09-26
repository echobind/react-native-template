---
inject: true
to: ios/<%=displayName%>/AppDelegate.m
after: \#import <React/RCTRootView.h>
skip_if: \#import "RNSplashScreen.h"
---
#import "RNSplashScreen.h"