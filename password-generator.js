var generator = require('generate-password');
var fs = require('fs');



var password = generator.generate({
    length:8,
    numbers:true,
    symbols:true
});

console.log(password);

fs.appendFile('passwords.txt',  `${password}\n`, function (err){
    if (err) return console.error(err);
    console.log(password + 'saved');
} )

