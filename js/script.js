let myOutputUlEl = document.querySelector(".__output-ul");
let myOutputDiv = document.querySelector(".__output-div");
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

function printTeamInfoInPage(team, containerEl) {
  for (let i = 0; i < team.length; i++) {
    const worker = team[i];

    let myLi = document.createElement("li");
    myLi.innerHTML = `Worker ${i + 1}: `;
    for (const key in worker) {
      let mySpan = document.createElement("span");
      // altro metodo element.innerHTML += `${key}: ${worker[key]}`
      mySpan.innerHTML = ` ${key}: ${worker[key]}`;
      myLi.append(mySpan);
    }
    containerEl.append(myLi);
  }
}

// Creo una funzione che mi genera le mie 6 cards seguendo il template di Bootstrap
{
  /* <div class="card" >
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div> */
}

function generateCards(arr, containerEl) {
  for (let i = 0; i < arr.length; i++) {
    // creo l'elemento div con la classe card di BS
    let myCardDiv = document.createElement("div");
    myCardDiv.classList.add("card");
    myCardDiv.style.width = `calc(100% / 3 * 1 - (20px / 3 *2));`;
    myCardDiv.style.boxShadow = "3px 4px 6px";
    containerEl.append(myCardDiv);
    // creo l'immagine da appendere all'elemento card e lo appendo al dic 'card'
    let imgEl = document.createElement("img");
    imgEl.setAttribute("src", `img/${arr[i].image}`);
    myCardDiv.append(imgEl);
    // creo l'elemento cardBody 'div' da appendere all'elemento di classe 'card'
    let cardBodyEl = document.createElement("div");
    cardBodyEl.classList.add("card-body");
    cardBodyEl.style.textAlign = "center";
    myCardDiv.append(cardBodyEl);
    // creo l'elemento h4 e lo appendo all'elem 'cardBody'
    let cardBodyTitleEl = document.createElement("h4");
    cardBodyTitleEl.innerHTML = `${arr[i].name}`;
    cardBodyEl.append(cardBodyTitleEl);
    // creao l'elemento h6 e idem come sopra
    let cardBodySubTitle = document.createElement("h6");
    cardBodySubTitle.innerHTML = `${arr[i].role}`;
    cardBodyEl.append(cardBodySubTitle);
  }
}

printTeamInfo(team);
printTeamInfoInPage(team, myOutputUlEl);
generateCards(team, myOutputDiv);
