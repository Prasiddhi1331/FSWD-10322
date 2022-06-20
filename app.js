const todoList = document.querySelector("ol");
const input = document.querySelector("input");

const chores = [];

const displayList = (chores) => {
  chores.forEach((chore) => {
    const ele = document.createElement('li')
    ele.innerHTML=chore
    todoList.appendChild(ele)
  });
};
const handleAdd = ()=>{
  const eleToAdd = document.createElement('li')
  eleToAdd.innerHTML = input.value
  todoList.appendChild(eleToAdd)
}

displayList(chores);