import mVendedor from "./mVendedor.js";

export default class mVenta {
  // [MAY-01] Variables de control C-A-M-P-P con prefijos estándar
  private acumTotalVentas: number;
  private contVentasMenorIgual100: number;
  private contVentasMayor100: number;
  private contVentas: number;
  private minVenta: number;

  // [MAY-02] Constructor con inicialización estricta en 0 (sin setters)
  constructor() {
    this.acumTotalVentas = 0;
    this.contVentasMenorIgual100 = 0;
    this.contVentasMayor100 = 0;
    this.contVentas = 0;
    this.minVenta = 0;
  }

  // [MAY-03] Receptor de flujo en caliente (cero arreglos [])
  procesarVendedor(vendedor: mVendedor): void {
    // A - Acumular:
    this.acumTotalVentas += vendedor.monto;

    // C - Contar:
    this.contVentas++;

    if (vendedor.esVentaMenorOIgual100()) {
      this.contVentasMenorIgual100++;
    } else {
      this.contVentasMayor100++;
    }

    // M - Menor (Extremos y Récords):
    if (this.contVentas === 1 || vendedor.monto < this.minVenta) {
      this.minVenta = vendedor.monto;
    }
  }

  // [MAY-04] Métodos de reporte gerencial
  totalVentas(): number {
    return this.acumTotalVentas;
  }

  ventasMenorIgual100(): number {
    return this.contVentasMenorIgual100;
  }

  ventasMayor100(): number {
    return this.contVentasMayor100;
  }

  menorVenta(): number {
    return this.minVenta;
  }

  // [MAY-04] Blindaje obligatorio contra división por cero
  promVenta(): number {
    if (this.contVentas === 0) return 0;
    return this.acumTotalVentas / this.contVentas;
  }
}
