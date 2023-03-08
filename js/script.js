let myOutputEl = document.querySelector(".__output");
/*
Wayne Barnett	  Founder & CEO	         wayne-barnett-founder-ceo.jpg
Angela Caroll	  Chief Editor	         angela-caroll-chief-editor.jpg
Walter Gordon	  Office Manager	     walter-gordon-office-manager.jpg
Angela Lopez	  Social Media Manager	 angela-lopez-social-media-manager.jpg
Scott Estrada	  Developer	             scott-estrada-developer.jpg
Barbara Ramos	  Graphic Designer	     barbara-ramos-graphic-designer.jpg

let worker = {
  name: "",
  role: "",
  image: "",
};
*/
let worker1 = {
  name: "Wayne Barnett",
  role: "Founder & CEO",
  image: "wayne-barnett-founder-ceo.jpg",
};

let worker2 = {
  name: "Angela Caroll",
  role: "Chief Editor",
  image: "angela-caroll-chief-editor.jpg",
};

let worker3 = {
  name: "Walter Gordon",
  role: "Office Manager",
  image: "walter-gordon-office-manager.jpg",
};

let worker4 = {
  name: "Angela Lopez",
  role: "Social Media Manager",
  image: "angela-lopez-social-media-manager.jpg",
};

let worker5 = {
  name: "Scott Estrada",
  role: "Developer",
  image: "scott-estrada-developer.jpg",
};

let worker6 = {
  name: "Barbara Ramos",
  role: "Graphic Designer",
  image: "barbara-ramos-graphic-designer.jpg",
};

const team = [worker1, worker2, worker3, worker4, worker5, worker6];

console.log(team);

// function printEachTeamMember(arr) {}
for (let i = 0; i < team.length; i++) {
  console.log(team[i].name, team[i].role, team[i].image);
}

function printTeamInfo(team) {
  for (let i = 0; i < team.length; i++) {
    const worker = team[i];
    console.log(`Worker ${i + 1}:`);
    for (const key in worker) {
      console.log(`${key}: ${worker[key]}`);
    }
    console.log("");
  }
}

function printTeamInfoInPage(team, pageElement) {
  for (let i = 0; i < team.length; i++) {
    const worker = team[i];
    pageElement.innerHTML = `Worker ${i + 1}:`;
    for (const key in worker) {
      pageElement.innerHTML = `${key}: ${worker[key]}`;
    }
  }
}

printTeamInfo(team);
printTeamInfoInPage(team, myOutputEl);
