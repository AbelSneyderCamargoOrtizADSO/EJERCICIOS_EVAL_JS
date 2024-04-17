export class calculadora {
  suma(a, b) {
    return a + b;
  }

  resta(a, b) {
    return a - b;
  }

  multi(a, b) {
    return a * b;
  }

  divi(a, b) {
    if (b === 0) {
      throw new Error("ERROR: EL DIVISOR NO PUEDE SER 0.");
    } else {
      return a / b;
    }
  }
}
