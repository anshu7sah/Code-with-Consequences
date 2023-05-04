let item = 0;
const teamMembers = [
  {
    name: "Anshu Sah",
    description:
      "As an experienced full stack developer, I am passionate about creating innovative software solutions that meet the needs of users and businesses across the entire technology stack. With expertise in programming languages such as JavaScript, Python, and Ruby, as well as front-end frameworks like React and Angular, and back-end frameworks such as Node.js and Django, I am confident in my ability to tackle complex projects and deliver high-quality results.",
    title: "Full stack Developer",
  },
  {
    name: "Santosh Ray",
    description:
      "As a seasoned Solidity developer, I am passionate about creating innovative blockchain-based solutions that meet the needs of businesses and users alike. With a deep understanding of the Ethereum blockchain and expertise in smart contract development using Solidity, I am confident in my ability to design and deploy secure and efficient decentralized applications",
    title: "solidity",
  },
  {
    name: "Ankit Karki",
    description:
      " As an experienced backend developer, I am passionate about building scalable and efficient software solutions that power the functionality of applications and services. With expertise in programming languages such as Java, Python, and Ruby, as well as frameworks like Spring Boot, Flask, and Ruby on Rails, I am confident in my ability to design and implement robust backend architectures that support complex business logic.",
    title: "backend",
  },
  {
    name: "Kunal Singh",
    description:
      "As an experienced Full Stack Developer, I am passionate about creating innovative software solutions that meet the needs of users and businesses across the entire technology stack. With expertise in programming languages such as Java, Python, and JavaScript, as well as front-end and back-end frameworks like React, Angular, Node.js, and Django, I am confident in my ability to tackle complex projects and deliver high-quality results.",
    title: "Full stack ",
  },
];

const nextHandler = () => {
  const title = document.querySelector(".title");
  const name = document.querySelector("h1");
  const desc = document.querySelector(".desc");
  item = (item + 1) % 4;
  title.innerHTML = teamMembers[item].title;
  name.innerHTML = teamMembers[item].name;
  desc.innerHTML = teamMembers[item].description;
};
const prevHandler = () => {
  const title = document.querySelector(".title");
  const name = document.querySelector("h1");
  const desc = document.querySelector(".desc");
  if (item == 0) {
    item = 3;
  } else {
    item = item - 1;
  }
  title.innerHTML = teamMembers[item].title;
  name.innerHTML = teamMembers[item].name;
  desc.innerHTML = teamMembers[item].description;
};
document.querySelector(".next").addEventListener("click", nextHandler);
document.querySelector(".previous").addEventListener("click", prevHandler);
