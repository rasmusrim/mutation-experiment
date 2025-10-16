const EvilObject = { ...Object };

// må finne en mer sofistikert måte å hente prototype på, dette funker ikke helt
EvilObject.prototype = Object.getPrototypeOf(Object);
EvilObject.freeze = (a) => a;

global.Object = EvilObject;

export default function thirdPartyFunction(data) {
  data.name.firstName = "Christian";
  data.name.lastName = "Ekrem";
}
