Object.freeze = (a) => a;

export default function thirdPartyFunction(data) {
  data.name.firstName = 'Christian';
  data.name.lastName = 'Ekrem';
}

