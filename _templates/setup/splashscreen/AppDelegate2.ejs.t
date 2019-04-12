---
inject: true
to: ios/<%=displayName%>/AppDelegate.m
before: return YES;
skip_if: [RNSplashScreen show]
---
  [RNSplashScreen show];