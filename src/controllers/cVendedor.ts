import { iVendedor } from "../interfaces/iVendedor.js";
import mVendedor from "../models/mVendedor.js";

export default class cVendedor {
  private vista: iVendedor;
  // [CBK-01] Callback de ciclo de vida tipado (recibe la instancia o null)
  private callback!: (vendedor: mVendedor | null) => void;

  constructor(vista: iVendedor) {
    this.vista = vista;
    // [ARW-01] Funciones flecha para preservar el contexto léxico `this`
    this.vista.onAceptar(() => this.btAceptarOnClick());
    this.vista.onCancelar(() => this.btCancelarOnClick());
  }

  // [CBK-02] Protocolo de solicitud: guarda el callback y muestra el formulario
  solicitarVendedor(callback: (vendedor: mVendedor | null) => void): void {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btAceptarOnClick(): void {
    // Instancia el modelo menor leyendo los getters de la interfaz
    const instancia = new mVendedor({
      nombre: this.vista.nombre,
      monto: this.vista.monto,
    });
    this.vista.ocultar();
    this.callback(instancia); // Devuelve la instancia viva a la mayor
  }

  private btCancelarOnClick(): void {
    this.vista.ocultar();
    this.callback(null); // Cancela retornando null
  }
}

