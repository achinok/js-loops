

let idealTemp = 70;

function temperature(num) {
  if (num > 70 ) {
    console.log("Run AC");
  }
  if (num < 70 ) {
    console.log("Run Heat");
  }
  if (num === 70 ) {
    console.log("Stand By");
  }
};

temperature(70);