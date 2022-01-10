const fs = require("fs");
const { createPromptModule } = require("inquirer");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", fileContent, err => {
            // If error, reject the Promise and send the error
            if (err) {
                reject(err);
                return; // Return out of function
            };
            // If everything went well, resolve Promise and send the successful data
            resolve({
                ok: true,
                message: "File created!"
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            // If error, reject the Promise and send the error
            if (err) {
                reject(err);
                return; // Return out of function
            }
            // If everything went well, resolve Promise and send the successful data
            resolve({
                ok: true,
                message: "File copied!"
            });
        });
    });
};

module.exports = { writeFile, copyFile };