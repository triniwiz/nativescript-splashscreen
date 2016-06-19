var path = require('path');
var fs = require('fs-extra');

let files = [
    [path.resolve('./', 'SplashScreen.ts'), path.resolve('../../', 'app/SplashScreen.ts')],
    [path.resolve('./', 'platforms/android/fonts/RobotoRegular.ttf'), path.resolve('../../', 'app/fonts/RobotoRegular.ttf')],
    [path.resolve('./', 'platforms/android/res/drawable/splash_logo.png'), path.resolve('../../', 'app/App_Resources/Android/drawable/splash_logo.png')],
    [path.resolve('./', 'platforms/android/res/values/material_colors.xml'), path.resolve('../../', 'app/App_Resources/Android/values/material_colors.xml')],
    [path.resolve('./', 'platforms/android/res/values/splash_settings.xml'), path.resolve('../../', 'app/App_Resources/Android/values/splash_settings.xml')]
];


files.forEach((item, index) => {
    let fileOrFolder = item[0];
    let dest = item[1];

    fs.copy(fileOrFolder, `${dest}`, (err) => {
        if (err) return console.error(err)
    })
})