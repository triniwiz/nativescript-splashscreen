var path = require('path');
var fs = require('fs-extra');

let files = [
    [path.resolve('./', 'platforms/android/source/SplashScreen.js'), path.resolve('../../', 'app/SplashScreen.js')],
    [path.resolve('./', 'platforms/android/fonts/RobotoRegular.ttf'), path.resolve('../../', 'app/fonts/RobotoRegular.ttf')],
    [path.resolve('./', 'platforms/android/res/drawable/splash_logo.png'), path.resolve('../../', 'app/App_Resources/Android/drawable/splash_logo.png')]
];


files.forEach((item, index) => {
    let fileOrFolder = item[0];
    let dest = item[1];

    fs.copy(fileOrFolder, `${dest}`, { clobber: false }, (err) => {
        if (err) return console.error(err)
    })
})