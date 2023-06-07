const KEY = "users";
function saveUser(user) {
  let userArray = readUsers(); // getting usersList
  userArray.push(user); // adding a new user
  let val = JSON.stringify(userArray); // it parse the obj into the string
  localStorage.setItem(KEY, val); // this sends the val to the LS
  console.log("The user was sent to the LS");
}

function readUsers() {
  let data = localStorage.getItem(KEY); // it gets from LS the data under "users"
  if (!data) {
    //NOT data?
    //if you get here it means
    return [];
  } else {
    let userList = JSON.parse(data); // parse the string back into the obj
    return userList;
  }
}
