
// Summing an array of numbers:
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
  console.log(
    "Accumulator", accumulator,
    "CurrentValue", currentValue,
    "Total", accumulator + currentValue
  )
  return accumulator + currentValue;
}, 0)
console.log(sum);
// one line syntax
let sum2 = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum2)
//--------------------------------------------------
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((accumulator, currentValue) => accumulator + currentValue.yrsExperience, 0);
console.log("total Experience: ", totalExperience);

