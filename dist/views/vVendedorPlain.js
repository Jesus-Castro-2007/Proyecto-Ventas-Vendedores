export default class vVendedorPlain {
    constructor() {
        this.vista = document.getElementById("vendedor");
        this.inNombre = document.getElementById("vendedor_inNombre");
        this.inMonto = document.getElementById("vendedor_inMonto");
        this.btAceptar = document.getElementById("vendedor_btAceptar");
        this.btCancelar = document.getElementById("vendedor_btCancelar");
    }
    // Getters que extraen y limpian/convierten datos de los inputs
    get nombre() {
        return this.inNombre.value.trim();
    }
    get monto() {
        return +this.inMonto.value;
    }
    mostrar() {
        // Limpieza de campos al abrir
        this.inNombre.value = "";
        this.inMonto.value = "";
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
}
