export default class mVendedor {
  private _nombre: string = "";
  private _monto: number = 0;
  
  constructor({
    nombre,
    monto,
  }: { 
    nombre: string;
    monto: number;
  }) {
    this.nombre = nombre;
    this.monto = monto;
  }

  set nombre(valor: string) {
    this._nombre = valor.trim();
  }

  get nombre(): string {
    return this._nombre;
  }

  set monto(valor: number) {
    this._monto = +valor;
  }

  get monto(): number {
    return this._monto;
  }

  esVentaMenorOIgual100(): boolean {
    return this._monto <= 100;
  }
}