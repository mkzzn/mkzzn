window.onload = function() {
  document.getElementById("logo-tagline").innerHTML = randomArrayMember(taglines);
  document.getElementById("tagline-subject").innerHTML = randomArrayMember(taglineSubjects);
}
