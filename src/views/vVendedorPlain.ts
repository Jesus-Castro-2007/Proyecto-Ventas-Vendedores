import { iVendedor } from "../interfaces/iVendedor.js";

export default class vVendedorPlain implements iVendedor {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inMonto: HTMLInputElement;
  private btAceptar: HTMLButtonElement;
  private btCancelar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("vendedor") as HTMLElement;
    this.inNombre = document.getElementById("vendedor_inNombre") as HTMLInputElement;
    this.inMonto = document.getElementById("vendedor_inMonto") as HTMLInputElement;
    this.btAceptar = document.getElementById("vendedor_btAceptar") as HTMLButtonElement;
    this.btCancelar = document.getElementById("vendedor_btCancelar") as HTMLButtonElement;
  }

  // Getters que extraen y limpian/convierten datos de los inputs
  get nombre(): string {
    return this.inNombre.value.trim();
  }

  get monto(): number {
    return +this.inMonto.value;
  }

  mostrar(): void {
    // Limpieza de campos al abrir
    this.inNombre.value = "";
    this.inMonto.value = "";
    this.vista.hidden = false;
  }

  ocultar(): void {
    this.vista.hidden = true;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }
}

