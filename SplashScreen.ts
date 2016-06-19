@JavaProxy("com.tns.SplashScreen")
class SplashScreen extends com.viksaa.sssplash.lib.activity.AwesomeSplash {
    protected onCreate(bundle) {
        super.onCreate(bundle);
    }
    initSplash(configSplash) {

        /* you don't have to override every property */

        //Customize Circular Reveal
        configSplash.setBackgroundColor(com.tns.R.material_colors.md_red_50); //any color you want form colors.xml
        configSplash.setAnimCircularRevealDuration(2000); //int ms
        configSplash.setRevealFlagX(com.viksaa.sssplash.lib.cnst.Flags.REVEAL_RIGHT);  //or Flags.REVEAL_LEFT
        configSplash.setRevealFlagY(com.viksaa.sssplash.lib.cnst.Flags.REVEAL_BOTTOM); //or Flags.REVEAL_TOP


        //Choose LOGO OR PATH; if you don't provide String value for path it's logo by default

        //Customize Logo
        configSplash.setLogoSplash(com.tns.R.drawable.splash_logo); //or any other drawable
        configSplash.setAnimLogoSplashDuration(2000); //int ms
        configSplash.setAnimLogoSplashTechnique(com.daimajia.androidanimations.library.Techniques.Bounce); //choose one form Techniques (ref: https://github.com/daimajia/AndroidViewAnimations)

        /* SVG
                //Customize Path
                configSplash.setPathSplash(Constants.DROID_LOGO); //set path String
                configSplash.setOriginalHeight(400); //in relation to your svg (path) resource
                configSplash.setOriginalWidth(400); //in relation to your svg (path) resource
                configSplash.setAnimPathStrokeDrawingDuration(3000);
                configSplash.setPathSplashStrokeSize(3); //I advise value be <5
                configSplash.setPathSplashStrokeColor(R.color.accent); //any color you want form colors.xml
                configSplash.setAnimPathFillingDuration(3000);
                configSplash.setPathSplashFillColor(R.color.Wheat); //path object filling color
        
        */

        //Customize Title
        configSplash.setTitleSplash(com.tns.R.splash_settings.splash_title);
        configSplash.setTitleTextColor(com.tns.R.material_colors.md_red_50);
        configSplash.setTitleTextSize(30);
        configSplash.setAnimTitleDuration(3000); //int ms
        configSplash.setAnimTitleTechnique(com.daimajia.androidanimations.library.Techniques.FlipInX);
        configSplash.setTitleFont("app/fonts/RobotoRegular.ttf"); //provide string to your font located in app/fonts/

    }
    animationsFinished() {
        const intent = new android.content.Intent(com.tns.NativeScriptApplication.getInstance().getApplicationContext(), com.tns.NativeScriptActivity.class)
        intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        com.tns.NativeScriptApplication.getInstance().startActivity(intent);
    }

};