/**
 * Create a Backpack object.
 */

// const { clearConfigCache } = require("prettier");

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

console.log("The backpack object:", backpack);
console.log("Strap length left:", backpack.strapLength.left);
// console.log("The pocket value:", backpack.pocketNum);

console.log("The pocket value:", backpack["pocketNum"]);
