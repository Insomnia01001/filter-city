const btn1 = document.querySelector(".btn1");
const input = document.querySelector(".in1");

async function Myfunc() {
  const respone = await fetch(`https://restcountries.com/v3.1/all
`);
  const data = await respone.json();
  const users = data;

  const filterData = users.filter((value) => {
    return value.name.common.includes(input.value);
  });

  myFunc2(filterData);
}
Myfunc();
btn1.addEventListener("click", Myfunc);

function myFunc2(user) {
  console.log(user);
  const wr = document.querySelector(".wrapper");

  wr.textContent = "";

  user.forEach((element) => {
    const box = document.createElement("div");
    const boximg = document.createElement("div");
    const img = document.createElement("img");
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    img.src = element.flags.png;
    h1.textContent = element.name.common;
    h2.textContent = element.region;
    wr.appendChild(box);
    box.append(boximg, h1, h2);
    box.classList.add("card");
    boximg.appendChild(img);
    boximg.classList.add("img1");
    h1.classList.add("h1");
    h2.classList.add("h2");
  });
}

// ????
// const btn = document.querySelector("#btn");

// async function myFunc1() {
//   const input = document.querySelector("#input");
//   const minValue = parseInt(input.value) || 100;

//   const respone = await fetch("https://dummyjson.com/users");
//   const data = await respone.json();
//   const users = data.users;

//   const filterData = users.filter((value) => {
//     return value.age < minValue;
//   });

//   myFunc2(filterData);
// }

// myFunc1();
// btn.addEventListener("click", myFunc1);

// function myFunc2(user) {
//   console.log(user);

//   const cardList = document.querySelector("#users-list");
//   cardList.textContent = "";

//   user.forEach((item) => {
//     const card = document.createElement("div");
//     const h1 = document.createElement("h1");
//     const h2 = document.createElement("h2");
//     const h3 = document.createElement("h3");
//     const h4 = document.createElement("h3");

//     card.classList.add("card");

//     h1.textContent = `${item.firstName} ${item.lastName}`;
//     h2.textContent = item.phone;
//     h3.textContent = item.university;
//     h4.textContent = item.age;

//     card.append(h1, h2, h3, h4);
//     cardList.appendChild(card);
//   });
// }
