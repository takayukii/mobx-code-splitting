const numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default class Counter {
  constructor(num = 0) {
    this.num = num;
  }

  get formatted() {
    return numberWithCommas(this.num);
  }

  get doubled() {
    return this.num * 2;
  }
}
