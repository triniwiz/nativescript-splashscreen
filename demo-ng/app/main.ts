// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import * as application from "application";
import { SplashScreen } from "nativescript-splashscreen";

import { AppModule } from "./app.module";

if (application.ios) {
    var FRESH_LAUNCH: boolean = true;

    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<any, any>): boolean {
            return true;
        }

        applicationDidBecomeActive(application: UIApplication): void {
            if (FRESH_LAUNCH) {
                FRESH_LAUNCH = false;
                let splash = new SplashScreen('twitterIcon.png', '#4E75E2');
                application.keyWindow.addSubview(splash.start());
            }
        }
    }

    application.ios.delegate = MyDelegate;
}

platformNativeScriptDynamic().bootstrapModule(AppModule);
