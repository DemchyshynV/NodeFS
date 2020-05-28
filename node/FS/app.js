const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const folder1 = '1800';
const folder2 = '2000';
const ls = promisify(fs.readdir);
const mv = promisify(fs.rename);

const swap = async (folder1, folder2) => {
    try {
        const filesArr1 = await ls(path.join(__dirname, folder1));
        const filesArr2 = await ls(path.join(__dirname, folder2));
        for (const value of filesArr1) {
                await mv(path.join(__dirname, folder1, value), path.join(__dirname, folder2, value))
            }
        for (const value of filesArr2) {
                await mv(path.join(__dirname, folder2, value), path.join(__dirname, folder1, value))
            }
    } catch (e) {
        console.log(e)
    }

};

swap(folder1, folder2);

// ls(path.join(__dirname, first))
//     .then(files18 => {
//         files18.forEach(value => {
//             mv(path.join(__dirname, first, value), path.join(__dirname, second, value)).catch(err => console.log(err))
//         });
//         return files18;
//     })
//     .then(files18 => {
//         return ls(path.join(__dirname, second)).then(files20 => {
//             return files20.filter(value => !files18.includes(value))
//         })
//     })
//     .then(files20 => {
//         files20.forEach(value => mv(path.join(__dirname, second, value), path.join(__dirname, first, value)))
//     }).catch(err => console.log(err))


// fs.readdir(path.join(__dirname, first), (err, files18) => {
//     if (err) {
//         console.log(err);
//     } else {
//         files18.forEach(value => {
//             fs.rename(path.join(__dirname, first, value), path.join(__dirname, second, value), err => {
//                 if (err) {
//                     console.log(err);
//                 }
//             })
//         })
//         fs.readdir(path.join(__dirname, second), (err, files20) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 files20
//                     .filter(value => !files18.includes(value))
//                     .forEach(value => {
//                         fs.rename(path.join(__dirname, second, value), path.join(__dirname, first, value), err => {
//                             if (err) {
//                                 console.log(err);
//                             }
//                         })
//                     })
//             }
//         })
//     }
// })
