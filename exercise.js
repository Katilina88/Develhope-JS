const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveDate() {
  const newString= JSON.stringify(user);
  localStorage.setItem('user', newString);
}

saveDate();
