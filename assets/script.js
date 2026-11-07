const archive = {
  butterflies: [
    "Monarch",
    "Painted Lady",
    "Red Admiral",
    "American Lady",
    "Viceroy",
    "Black Swallowtail",
    "Tiger Swallowtail",
    "Cabbage White",
    "Clouded Sulphur",
    "Question Mark",
  ],
};

function addButterflies(newButterflies) {
  for (const butterfly of newButterflies) {
    if (!archive.butterflies.includes(butterfly)) {
      archive.butterflies.push(butterfly);
    }
  }
}

module.exports = { archive, addButterflies };
