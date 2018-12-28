---
inject: true
to: ios/HelloWorld/AppDelegate.m
after: \#import <React/RCTRootView.h>
skip_if: \#import "RNSplashScreen.h"
---
#import "RNSplashScreen.h"