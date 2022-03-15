/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const lamp = {
  size: "small",
  brand: "tcm",
  status: "off",
};

const desk = {
  color: "brown",
  material: "wood",
  thingsOnIt: {
    computer: "macOS",
    screen: "asus",
    lamp,
  },
  thingsUnderIt: {
    plugs: 2,
    trashcan: 1,
  },
  illuminate: false,
  toggleLamp: function (lampStatus) {
    this.illuminate = lampStatus;
  },
};

console.log("This is my desk:", desk);
