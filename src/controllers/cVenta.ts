import mVenta from "../models/mVenta.js";
import { iVenta } from "../interfaces/iVenta.js";
import cVendedor from "./cVendedor.js";

export default class cVenta {
  private mVenta: mVenta = new mVenta();
  private vVenta: iVenta;
  private cVendedor: cVendedor;

  // [CTR-02] Inyección de dependencias en el constructor
  constructor(vistaMayor: iVenta, controladorMenor: cVendedor) {
    this.vVenta = vistaMayor;
    this.cVendedor = controladorMenor;

    this.vVenta.onNuevoVendedor(() => this.procesar1Vendedor());
  }

  private procesar1Vendedor(): void {
    // [CBK-03] Llamada asíncrona no bloqueante
    this.cVendedor.solicitarVendedor((vendedor) => {
      // [CBK-02] Manejo Seguro de null
      if (vendedor !== null) {
        this.mVenta.procesarVendedor(vendedor);
        this.vVenta.reportar({
          totalVentas: this.mVenta.totalVentas(),
          ventasMenorIgual100: this.mVenta.ventasMenorIgual100(),
          ventasMayor100: this.mVenta.ventasMayor100(),
          menorVenta: this.mVenta.menorVenta(),
          promVenta: this.mVenta.promVenta(),
        });
      }
    });
  }
}
