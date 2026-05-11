interface device {
  brand: string;
  model: string;
  price: number;
  isIgnition: boolean;
  on(): void;
  off(): void;
  getInfo(): void;
}

class product implements device {
  brand: string;
  model: string;
  price: number;
  isIgnition: boolean;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.isIgnition = false; // Valor inicial por defecto
  }

  on() {
    this.isIgnition = true;
  }

  off() {
    this.isIgnition = false;
  }

  getInfo() {
    console.log(
      `${this.brand} - ${this.brand} - ${this.model} - ${this.price}`,
    );
  }
}

const newPhone = new product("sony", "wh-1000", 444);
console.log(JSON.stringify(newPhone) + "====");
newPhone.getInfo();
