function create(proto){
  const newObj = {};
  newObj.__proto__ = proto;
  return newObj;
}

