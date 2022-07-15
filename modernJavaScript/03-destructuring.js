const user = {
  firstName: 'Marcos',
  lastName: 'Paulo',
  age: 19,
  instagram: '@eumarcosborgs',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
}
const { age, firstName, skills } = user;
const [primary, secondary] = skills;

console.log(primary, secondary)