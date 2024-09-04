window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  for (let p = 0; p < pronoun.length; p++) {
    for (let a = 0; a < adj.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        const LIST = document.getElementById("list");
        let listItem = document.createElement("li");
        listItem.innerHTML = pronoun[p] + adj[a] + noun[n] + ".com";
        LIST.appendChild(listItem);
      }
    }
  }
};
