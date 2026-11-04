import mVendedor from "../models/mVendedor.js";
export default class cVendedor {
    constructor(vista) {
        this.vista = vista;
        // [ARW-01] Funciones flecha para preservar el contexto léxico `this`
        this.vista.onAceptar(() => this.btAceptarOnClick());
        this.vista.onCancelar(() => this.btCancelarOnClick());
    }
    // [CBK-02] Protocolo de solicitud: guarda el callback y muestra el formulario
    solicitarVendedor(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btAceptarOnClick() {
        // Instancia el modelo menor leyendo los getters de la interfaz
        const instancia = new mVendedor({
            nombre: this.vista.nombre,
            monto: this.vista.monto,
        });
        this.vista.ocultar();
        this.callback(instancia); // Devuelve la instancia viva a la mayor
    }
    btCancelarOnClick() {
        this.vista.ocultar();
        this.callback(null); // Cancela retornando null
    }
}
