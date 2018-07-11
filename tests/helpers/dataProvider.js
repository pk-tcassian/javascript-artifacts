'use strict';

const fs = require('fs');

fs.readFile(fileName, (err, data) => {  
    if (err) throw err;
    let dataObject = JSON.parse(data);
    console.log(dataObject);
});

console.log('End of File Read');  