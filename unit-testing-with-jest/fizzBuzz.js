module.exports.fizzBuzz = function(input) { 
  if (typeof input !== 'number' || (!input && input != 0) || (input % 1 != 0)) 
    throw new Error('Input should be a number.');
    
  if ((input % 3 === 0) && (input % 5) === 0)
    return 'FizzBuzz';

  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz'; 

  return input; 
}