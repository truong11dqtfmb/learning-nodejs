//   1. Let,const
/*
 * 1. var / let, const: Scope, Hosting
 * 2. const / var,let: assignment
 * 
 */

// To object:
const sum = (a,b) => ({a: a, b:b});

console.log(sum(1,4));


// One parameter:
const logger = log => console.log(log);
logger('Message...')



