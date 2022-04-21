function towel() {
  var answer = window.prompt("What gets wetter as it dries?");
  if (answer.toLowerCase() == "towel" || answer.toLowerCase() == "a towel") {
    window.location.replace(
      "https://dwsantos.github.io/gsbc-intro-web/hw3/room0.html"
    );
  } else {
    alert("Wrong answer. Try again. ");
  }
}
function incorrect() {
  var answer = window.prompt(
    "What word is always spelled incorrectly in the dictionary?"
  );

  if (answer.toLowerCase() == "incorrectly" || "incorrectly ") {
    window.location.replace(
      "https://dwsantos.github.io/gsbc-intro-web/hw3/room3.html"
    );
  } else {
    alert("Wrong answer. Try again. ");
  }
}
function bank() {
  var answer = window.prompt(
    "I have branches, but no fruit, trunk or leaves. What am I?"
  );

  if (answer.toLowerCase() == "bank" || "a bank" || "bank " || "a bank ") {
    window.location.replace(
      "https://dwsantos.github.io/gsbc-intro-web/hw3/room6.html"
    );
  } else {
    alert("Wrong answer. Try again. ");
  }
}
function river() {
  var answer = window.prompt(
    "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?"
  );

  if (answer.toLowerCase() == "river" || "a river" || "a river " || "river ") {
    window.location.replace(
      "https://dwsantos.github.io/gsbc-intro-web/hw3/room9.html"
    );
  } else {
    alert("Wrong answer. Try again. ");
  }
}
function finalQ() {
  var answer = window.prompt("What has five eyes, but cannot see?");

  if (
    answer.toLowerCase() == "the mississippi river" ||
    "the mississippi river " ||
    "mississippi river" ||
    "mississippi river "
  ) {
    window.location.replace(
      "https://dwsantos.github.io/gsbc-intro-web/hw3/room10.html"
    );
  } else {
    alert("Wrong answer. Try again. ");
  }
}
function fHint() {
  var answer = window.prompt("What gets wetter as it dries?");
  if (answer.toLowerCase() == "towel" || answer.toLowerCase() == "a towel") {
    var answer1 = window.prompt(
      "What word is always spelled incorrectly in the dictionary?"
    );
    if (answer1.toLowerCase() == "incorrectly" || "incorrectly ") {
      var answer2 = window.prompt(
        "I have branches, but no fruit, trunk or leaves. What am I?"
      );
      if (answer2.toLowerCase() == "bank" || "a bank" || "bank " || "a bank ") {
        var answer3 = window.prompt(
          "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?"
        );
        if (
          answer3.toLowerCase() == "river" ||
          "a river" ||
          "a river " ||
          "river "
        ) {
          alert(
            "It is two words long. The second word is river. It is the longest river in the United States. It is often spelled incorrectly, and this river, which splits the US into two, is often associated with Mark Twain and Tom Sawyer."
          );
        }
      }
    }
  } else {
    alert("Wrong answer. Try again. ");
  }
}
