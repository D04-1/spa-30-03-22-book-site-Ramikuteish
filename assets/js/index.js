const books = [
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: "Read",
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: "To read",
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: "Read",
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: "To read",
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
];
for (let book of books) {
  // div
  const elementDiv = document.createElement("div");
  const ulDiv = document.querySelector("ul");
  ulDiv.appendChild(elementDiv);

  ulDiv.classList.add("book-list");
  ulDiv.classList.add("status");
  ulDiv.style.gap = "2rem";
  ulDiv.style.gap = "2rem";

  elementDiv.classList.add("book");
  elementDiv.style.height = "450px";
  elementDiv.style.border = "1px solid grey";
  elementDiv.style.position = "relative";

  // img
  const elementImg = document.createElement("img");
  elementImg.src = book.img;
  elementDiv.appendChild(elementImg);
  elementImg.classList.add("book-cover");
  elementImg.style.width = "100%";
  elementImg.style.height = "350px";

  // title
  const elementh3 = document.createElement("h3");
  elementDiv.appendChild(elementh3);
  elementh3.innerText = book.title;
  elementh3.style.fontSize = "20px";
  elementh3.style.margin = "1rem";

  // author
  const elementp = document.createElement("p");
  elementDiv.appendChild(elementp);
  elementp.innerText = book.author;
  elementp.style.color = "grey";
  elementp.style.margin = "1rem";

  const elementFooter = document.createElement("footer");
  elementDiv.appendChild(elementFooter);
  elementFooter.style.backgroundColor = "grey";
  elementFooter.style.width = "100%";
  elementFooter.style.height = "15%";
  elementFooter.style.bottom = "0";
  elementFooter.style.backgroundColor = "lightgray";
  elementFooter.style.position = "absolute";

  // button (alreadyRead)
  const elementButton = document.createElement("button");
  elementFooter.appendChild(elementButton);
  elementButton.innerText = book.alreadyRead;
  elementButton.style.backgroundColor = "darkkhaki";
  elementButton.style.color = "white";
  elementButton.style.borderRadius = "40%";
  elementButton.style.width = "80px";
  elementButton.style.float = "right";
  elementButton.style.margin = "1rem";

  if (book.alreadyRead === "To read") {
    elementButton.style.backgroundColor = "grey";
  }
}
