const user = {
  id: 1,
  name: "John",
  age: 25,
};



function saveDate() {
  const newString = localStorage.getItem('user');
  const recoverUser = JSON.parse(newString);
  console.log(recoverUser);
}




saveDate();
