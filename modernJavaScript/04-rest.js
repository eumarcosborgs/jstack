const user = {
  firstName: 'Marcos',
  lastName: 'Paulo',
  age: 19,
  instagram: '@eumarcosborgs',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}
const { age, firstName, ...rest } = user;

console.log({ age, firstName })
console.log(rest)