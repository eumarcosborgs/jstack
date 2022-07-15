const user = {
  firstName: 'Marcos',
  lastName: 'Paulo',
  age: 19,
  instagram: '@eumarcosborgs',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false
}

// user.active = true;
// Object.assign(user, { active: true });
const updateUser = {
  ...user,
  skills: [...user.skills, 'Marketing'],
  active: true
}

console.log(updateUser)