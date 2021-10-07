const handOptions = {
  "rock": "handrock.jpg",
  "papier": "purplepaper.png",
  "ciseaux": "scissors-removebg-preview.jpg"
}

let SCORE = 0;

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "papier", "ciseaux"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "papier" && cpHand == "ciseaux") {
    setDecision("PERDU!");
  }
  if (userHand == "papier" && cpHand == "rock") {
    setDecision("GAGNÉ!");
    setScore(SCORE + 1);
  }
  if (userHand == "papier" && cpHand == "papier") {
    setDecision("ÉGALITÉ");
  }
  if (userHand == "rock" && cpHand == "ciseaux") {
    setDecision("GAGNÉ!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "papier") {
    setDecision("PERDU!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("ÉGALITÉ!");
  }
  if (userHand == "ciseaux" && cpHand == "ciseaux") {
    setDecision("ÉGALITÉ!");
  }
  if (userHand == "ciseaux" && cpHand == "rock") {
    setDecision("PERDU!");
  }
  if (userHand == "ciseaux" && cpHand == "papier") {
    setDecision("GAGNÉ!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let hands = document.querySelector(".hands");
  hands.style.display = "flex";
}

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".scorechanger").innerText = newScore;
}