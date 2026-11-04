import { iVenta } from "../interfaces/iVenta.js";

export default class vVentaPlain implements iVenta {
  private btNuevo: HTMLButtonElement;
  private lblVentasMenorIgual100: HTMLElement;
  private lblVentasMayor100: HTMLElement;
  private lblTotalVentas: HTMLElement;
  private lblMenorVenta: HTMLElement;
  private lblPromVenta: HTMLElement;

  constructor() {
    this.btNuevo = document.getElementById("body_btNuevoVendedor") as HTMLButtonElement;
    this.lblVentasMenorIgual100 = document.getElementById("body_lblVentasMenorIgual100") as HTMLElement;
    this.lblVentasMayor100 = document.getElementById("body_lblVentasMayor100") as HTMLElement;
    this.lblTotalVentas = document.getElementById("body_lblTotalVentas") as HTMLElement;
    this.lblMenorVenta = document.getElementById("body_lblMenorVenta") as HTMLElement;
    this.lblPromVenta = document.getElementById("body_lblPromVenta") as HTMLElement;
  }

  onNuevoVendedor(callback: () => void): void {
    this.btNuevo.onclick = callback;
  }

  reportar({
    totalVentas,
    ventasMenorIgual100,
    ventasMayor100,
    menorVenta,
    promVenta,
  }: {
    totalVentas: number;
    ventasMenorIgual100: number;
    ventasMayor100: number;
    menorVenta: number;
    promVenta: number;
  }): void {
    this.lblVentasMenorIgual100.innerHTML = `${ventasMenorIgual100}`;
    this.lblVentasMayor100.innerHTML = `${ventasMayor100}`;
    this.lblTotalVentas.innerHTML = `${totalVentas}$`;
    this.lblMenorVenta.innerHTML = `${menorVenta}$`;
    this.lblPromVenta.innerHTML = `${promVenta.toFixed(2)}$`;
  }
}
