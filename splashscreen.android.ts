///
import _Techniques = com.daimajia.androidanimations.library.Techniques;
import _AwesomeSplash = com.viksaa.sssplash.lib.activity.AwesomeSplash;
import _Flags = com.viksaa.sssplash.lib.cnst.Flags;
import _ConfigSplash = com.viksaa.sssplash.lib.model.ConfigSplash;
export class SplashScreen extends _AwesomeSplash {
    initSplash(configSplash) {
        configSplash.setTitleSplash("NativeScript <3 <3");
        //  configSplash.setTitleTextColor(R.color.ns_primary);
        configSplash.setTitleTextSize(30); //float value
        configSplash.setAnimTitleDuration(3000);
        configSplash.setAnimTitleTechnique(_Techniques.FlipInX);
        //configSplash.setTitleFont("app/fonts/KGLifeisMessy.ttf");
    }
    animationsFinished() { }
}