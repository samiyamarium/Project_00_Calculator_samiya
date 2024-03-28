#! /usr/bin/env node
var args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Please enter at least 2 numbers');
    process.exit(1); //an error occurred
}
var prev = parseFloat(args[0]);
var curr = parseFloat(args[1]);
var total = prev * curr;
if (isNaN(total)) {
    console.error('One or more arguments are not numbers');
    process.exit(1); //an error occurred
}
console.log(total);
process.exit(0); //no errors occurred
