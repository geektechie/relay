class List {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class User {
  constructor(id, name, address, email, age) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
    this.age = age;
  }
}

const userList = new List(1, 'User List');
var users = [
  new User(1, 'John', '82 Palm St, NY', 'john@gmail.com', '75'),
  new User(2, 'Paul', '345 Lafayette St, NY', 'paul@gmail.com', '31'),
  new User(3, 'Cruise', '194 W Broadway St, NY', 'cruise@gmail.com', '35'),
  new User(4, 'Ellen', '164 William St, NY', 'ellen@gmail.com', '65'),
  new User(5, 'Joey', '25 Pine St, NY', 'joey@gmail.com', '11'),
  new User(6, 'Rocky', '25 Pine St, NY', 'rocky@gmail.com', '25'),
];

/*
* Add users in memory
*/

let curUsers = 9;
function addUser(name, address, email, age) {
  const newUser = new User(curUsers, name, address, email, age);
  users.push(newUser);
  newUser.id = curUsers;
  curUsers += 1;
  return newUser;
}

function updateUser(name, address, email, oldEmail, age) {
  var User = users.find(w => w.email === oldEmail);
  User.name = name;
  User.address = address;
  User.email = email;
  User.age = age;
  return User;
}

function deleteUser(id, email) {
  users = users.filter(function(User) {
    return User.email !== email;
  });
  return { id };
}

function getList(id) {
  return id === userList.id ? userList : null;
}

function getUser(email) {
  return users.find(w => w.email === email);
}

function getUsers() {
  return users;
}

export {
  List,
  User,
  getList,
  getUser,
  getUsers,
  addUser,
  deleteUser,
  updateUser
};
