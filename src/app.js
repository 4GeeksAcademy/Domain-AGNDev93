window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  const LIST = document.getElementById("list");
  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        LIST.innerHTML +=
          '<li class="list-group-item">' +
          pronoun[p] +
          adj[a] +
          noun[n] +
          ".com" +
          "</li>";
      }
    }
  }
};
