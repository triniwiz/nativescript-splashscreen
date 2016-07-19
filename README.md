[![npm](https://img.shields.io/npm/v/nativescript-splashscreen.svg)](https://www.npmjs.com/package/nativescript-splashscreen)
[![npm](https://img.shields.io/npm/dt/nativescript-splashscreen.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-splashscreen)
#Installation
`tns plugin add nativescript-splashscreen`

#Configure

* [Android](#android)
* [iOS](#ios)

## Android
*Important* update all occurrences of `org.nativescript.demo` to you app's id before using this plugin the app id can be found in the package.json of your apps root folder.


Update `app/App_Resources/Android/AndroidManifest.xml`

```xml
<activity
			android:name="com.tns.NativeScriptActivity"
			android:label="@string/title_activity_kimera"
			android:configChanges="keyboardHidden|orientation|screenSize">
		</activity>

        <activity 
		android:name="co.fitcom.SplashScreen" android:noHistory="true">
		<intent-filter>
		<category android:name="android.intent.category.LAUNCHER" />
		<action android:name="android.intent.action.MAIN" />
		</intent-filter>
		</activity>
```


###Update SplashScreen
Logo :- replace `app/App_Resources/Android/drawable/splashlogo.png` with your updated logo . *must use the same filename*

Text Displayed :- splash_title located in `app/App_Resources/Android/values/splash_settings.xml`
Text Color :- Update `configSplash.setTitleTextColor` in `app/SplashScreen.js`

#Colors
The color palette is based on https://material.google.com/style/color.html#color-color-palette

e.g `md_blue_900`

###Background

Update `configSplash.setBackgroundColor` in `app/SplashScreen.ts`

## iOS

Setup a delegate:

```ts
import * as application from 'application';
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
        let splash = new SplashScreen('twitterIcon.png', '#4E75E2');
        application.keyWindow.addSubview(splash.start());
      }
    }
  }
  application.ios.delegate = MyDelegate;
} 
application.start({ moduleName: 'main-page' });
```

This will only show the splash screen on a fresh startup since you wouldn't want it to appear and animate again on top of your view when returning to the app.

You can pass any image from your `app/App_Resources/iOS` folder and any `hex` background color.

```js
new SplashScreen('twitterIcon.png', '#4E75E2');
```


#Run demo

```
git clone https://github.com/triniwiz/nativescript-splashscreen
cd nativescript-splashscreen
npm run demo.android
```

#ScreenShots
Android | IOS
--------- | ----------
![ss](screenshots/ss.gif?raw=true) | ![splash](screenshots/splash.gif?raw=true)
