// import {View} from 'ui/view';
import {Color} from 'color';

export class SplashScreen {
  private _splashView: any;

  constructor(imageName: string, hexColor: string) {
    let icon = UIImage.imageNamed(imageName);
    let color = new Color(hexColor).ios;
    this._splashView = CBZSplashView.splashViewWithIconBackgroundColor(icon, color);
    this._splashView.animationDuration = 1.4;
  }

  public start() {
    this._splashView.startAnimation();
    setTimeout(() => {
      this._splashView = undefined;
    }, 1900);
    return this._splashView;
  }
}