#Installation
`tns plugin add nativescript-splashscreen`

#Configure
*non-typescript* updates are made in `SplashScreen.js`
*Important* update all occurrences of `org.nativescript.demo` to you app's id before using this plugin the app id can be found in the package.json of your apps root folder.


Update `app/App_Resources/Android/AndroidManifest.xml`

```
<activity
			android:name="com.tns.NativeScriptActivity"
			android:label="@string/title_activity_kimera"
			android:configChanges="keyboardHidden|orientation|screenSize">
		</activity>

        <activity 
		android:name="co.fitcom.SplashScreen" >
		<intent-filter>
		<category android:name="android.intent.category.LAUNCHER" />
		<action android:name="android.intent.action.MAIN" />
		</intent-filter>
		</activity>
```


###Update SplashScreen
Logo :- replace `app/App_Resources/Android/drawable/splashlogo.png` with your updated logo . *must use the same filename*

Text Displayed :- splash_title located in `app/App_Resources/Android/values/splash_settings.xml`
Text Color :- Update `configSplash.setTitleTextColor` in `app/SplashScreen.ts`

#Colors
The color palette is based on https://material.google.com/style/color.html#color-color-palette

e.g `md_blue_900`

###Background

Update `configSplash.setBackgroundColor` in `app/SplashScreen.ts`


#Run demo

```
git clone https://github.com/triniwiz/nativescript-splashscreen
cd nativescript-splashscreen
npm run demo.android
```

#ScreenShots

![ss](screenshots/ss.gif?raw=true)