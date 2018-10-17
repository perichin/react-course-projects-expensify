
// const person = {
//     name: 'Slobo',
//     age: 38,
//     location: {
//         city: 'Begrade',
//         temp: 23
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);


// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`It's ${temp} in ${city}.`);
// }

const address = ['Chingrijina 13', 'Belgrade', 'Serbia', '11000'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

