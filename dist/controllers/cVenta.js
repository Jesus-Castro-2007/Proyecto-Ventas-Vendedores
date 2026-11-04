import mVenta from "../models/mVenta.js";
export default class cVenta {
    // [CTR-02] Inyección de dependencias en el constructor
    constructor(vistaMayor, controladorMenor) {
        this.mVenta = new mVenta();
        this.vVenta = vistaMayor;
        this.cVendedor = controladorMenor;
        this.vVenta.onNuevoVendedor(() => this.procesar1Vendedor());
    }
    procesar1Vendedor() {
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
