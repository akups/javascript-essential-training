export default class Desk {
  constructor(color, material, thingsOnItC, thingsOnItS, thingsOnItL) {
    this.color = color;
    this.material = material;
    this.thingsOnIt = {
      computer: thingsOnItC,
      screen: thingsOnItS,
      lamp: thingsOnItL,
    };
  }
}
