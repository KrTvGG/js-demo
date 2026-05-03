const roles = ['user', 'admin', 'manager', 'superuser'];

const res = roles.slice(2);
console.log(roles); // ["user","admin","manager","superuser"]
console.log(res); // ["manager","superuser"]

const res2 = roles.slice(2, 3);
console.log(res2); // ["manager"]

const res3 = roles.slice(-1);
console.log(res3); // ["superuser"]
const res4 = roles.slice(-2);
console.log(res4); // ["manager","superuser"]

const res5 = roles.slice(1, -1);
console.log(res5); // ["admin","superuser"]

// const res6 = roles.splice(2);
// console.log(res6); // ["manager","superuser"]
// console.log(roles); // ["user","admin"]

// const res7 = roles.splice(2, 1);
// console.log(res7); // ["manager"]

// const res8 = roles.splice(-1);
// console.log(res8); // ["superuser"]

const res9 = roles.reverse();
console.log(res9); // ["superuser","manager","admin","user"]
console.log(roles); // ["superuser","manager","admin","user"]

const newRoles = ['sysadmin', 'developer'];
const res10 = roles.concat(newRoles);
console.log(res10); // ["superuser","manager","admin","user","sysadmin","developer"]
