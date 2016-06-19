import path = require('path');
import fs = require("fs");
let file = [
    [path.resolve('./', 'SplashScreen.ts'), path.resolve('../../', 'app'), 'SplashScreen.ts'],
    [path.resolve('./', 'platforms/android/fonts/RobotoRegular.ttf'), path.resolve('../../', 'app/fonts'), 'RobotoRegular.ttf'],
];


file.forEach(function (item, index) {
    let fileOrFolder = item[0];
    let dest = item[1];
    let newFile = item[2];
    fs.unlink(`${dest}/${newFile}`, (err) => {

    })
})