export const ofType = type => {
  // return the actual primitive type
  switch (true) {
    case type === null:
      // null is a type of object, instead it should return null
      return 'null';
    case Array.isArray(type):
      // an array is also a type of object, it should return array
      return 'array';
    default:
      // The rest is good, it can continue with this
      return typeof type;
  }
};
