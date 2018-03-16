const user = {
  name: 'Huy Hoang Phan',
  getName() {
    return this.name;
  }
}
console.log(user.getName());

const getUserName = user.getName.bind(user);
console.log(getUserName());