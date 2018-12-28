---
inject: true
to: ios/HelloWorld/AppDelegate.m
before: return YES;
skip_if: [RNSplashScreen show]
---
  [RNSplashScreen show];