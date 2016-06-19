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

    if (dest.indexOf("fonts") > -1) {
        fs.mkdir(path.resolve('../../', 'app/fonts'), (err) => {
            if (!err) {
                fs.rename(fileOrFolder, `${dest}/${newFile}`, (err) => {

                })
            } else if (err.code === 'EEXIST') {
                fs.rename(fileOrFolder, `${dest}/${newFile}`, (err) => {

                })
            }
        })
    } else {
        fs.rename(fileOrFolder, `${dest}/${newFile}`, (err) => {

        })
    }
})