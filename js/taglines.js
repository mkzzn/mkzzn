function randomTagline() {
  taglines = [
    "terrifying and illogical",
    "mind-altering and child-pulverizing",
    "soul-decanting and water-divining",
    "condor-waffling and mudhen-assailing",
    "rhododendron-abstracting and Bobby-Fischer-defeating",
    "Ben-Kingsley-disarming and parking-lot-obliterating",
    "UN-undermining and mountain-goat-arbitrating",
    "diplomat-catapulting and marmoset-confounding",
    "skillful-brick-laying and crocodile-annihilating",
    "salary-cap-defying and ostrich-ridiculing"
  ];
  
  return taglines[Math.floor(Math.random()*taglines.length)];
}
