const scores = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0
};

// Start button handler
function startEvent() {
  OpeningCeremony(() => {
    Race100M(scores, () => {
      LongJump(scores, () => {
        HighJump(scores, () => {
          AwardCeremony(scores);
        });
      });
    });
  });
}

// 1. Opening Ceremony
function OpeningCeremony(callback) {
  let count = 1;

  const interval = setInterval(() => {
    console.log(`🏁 Sports Day Started! (${count})`);
    count++;

    if (count > 3) {
      clearInterval(interval);
      console.log("Initial Scores:", scores);
      callback(scores);
    }
  }, 1000);
}

// 2. 100M Race
function Race100M(scores, callback) {
  setTimeout(() => {
    console.log("\n🏃 100M Race Started...");

    const times = {
      red: Math.floor(Math.random() * 6) + 10,
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10
    };

    console.log("Race Times:", times);

    const sorted = Object.entries(times)
      .sort((a, b) => a[1] - b[1]);

    scores[sorted[0][0]] += 50;
    scores[sorted[1][0]] += 25;

    console.log("Updated Scores:", scores);
    callback(scores);
  }, 3000);
}

// 3. Long Jump
function LongJump(scores, callback) {
  setTimeout(() => {
    console.log("\n🏆 Long Jump Event...");

    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];

    console.log("Winner:", winner);
    scores[winner] += 150;

    console.log("Updated Scores:", scores);
    callback(scores);
  }, 2000);
}

// 4. High Jump
function HighJump(scores, callback) {
  console.log("\n🤸 High Jump Event...");

  const input = prompt("Which color won High Jump?").toLowerCase();

  if (scores.hasOwnProperty(input)) {
    scores[input] += 100;
    console.log(`${input} gets 100 points!`);
  } else {
    console.log("Invalid input! No points awarded.");
  }

  console.log("Updated Scores:", scores);
  callback(scores);
}

// 5. Award Ceremony
function AwardCeremony(scores) {
  console.log("\n🎉 Final Results");

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  console.log(`🥇 1st: ${sorted[0][0]} - ${sorted[0][1]} pts`);
  console.log(`🥈 2nd: ${sorted[1][0]} - ${sorted[1][1]} pts`);
  console.log(`🥉 3rd: ${sorted[2][0]} - ${sorted[2][1]} pts`);
}
