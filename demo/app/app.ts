import * as application from 'application';
import {topmost} from 'ui/frame';
import {SplashScreen} from 'nativescript-splashscreen';

var FRESH_LAUNCH: boolean = true;

if (application.ios) {
  class MyDelegate extends UIResponder {
    public static ObjCProtocols = [UIApplicationDelegate];
    
    public applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary): boolean {
      return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
      if (FRESH_LAUNCH) {
        FRESH_LAUNCH = false;
        // console.log("keyWindow: " + application.keyWindow);
        // console.log("rootViewController: " + application.keyWindow.rootViewController);
        let splash = new SplashScreen('twitterIcon.png', '#4E75E2');
        application.keyWindow.addSubview(splash.start());
      }
    }
  }
  application.ios.delegate = MyDelegate;
} else {

}
application.start({ moduleName: 'main-page' });
