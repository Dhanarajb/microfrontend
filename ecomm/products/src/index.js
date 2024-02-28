import faker from "faker";

let products = "";

for (let i = 0; i < 40; i++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#links").innerHTML = products;
