window.onload = function() {
  document.getElementById("tagline-adjective").innerHTML = randomArrayMember(tagline["adjectives"]);
  document.getElementById("tagline-noun").innerHTML = randomArrayMember(tagline["nouns"]);
  document.getElementById("tagline-adverb").innerHTML = randomArrayMember(tagline["adverbs"]);
}
