import min from 'ml-array-min';


export default function min(input) {
    if (!isArray(input)) {
      throw new TypeError('input must be an array');
    }
  
    if (input.length === 0) {
      throw new TypeError('input must not be empty');
    }
  
    var min = input[0];
    for (var i = 1; i < input.length; i++) {
      if (input[i] < min) min = input[i];
    }
    console.log(min);
    return min; 
  }