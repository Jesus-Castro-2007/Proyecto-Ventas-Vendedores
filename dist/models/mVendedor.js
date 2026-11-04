export default class mVendedor {
    constructor({ nombre, monto, }) {
        this._nombre = "";
        this._monto = 0;
        this.nombre = nombre;
        this.monto = monto;
    }
    set nombre(valor) {
        this._nombre = valor.trim();
    }
    get nombre() {
        return this._nombre;
    }
    set monto(valor) {
        this._monto = +valor;
    }
    get monto() {
        return this._monto;
    }
    esVentaMenorOIgual100() {
        return this._monto <= 100;
    }
}
