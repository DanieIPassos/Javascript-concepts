const item = {
  name: 'Daniel',
  age: 22,


  // string 1 se não for primitivo, chama o valueOf
  toString() {
    return 'Name: ${this.name}, Age: ${this.age}'
  },
  // number: 1 se não for primitivo, chama o toString
  valueOf() {
    return { hey: 'dude'}
  },
  // ele tem prioridade na parada
  [Symbol.toPrimitive](coercionType) {
    console.log('Trying to convert to: ', coercionType)
    const types = {
      string: JSON.stringify(this),
      number: 123
    }
    return types[coercionType] || types.string
  }
}

console.log("String", String(item))
console.log("Number", Number(item))