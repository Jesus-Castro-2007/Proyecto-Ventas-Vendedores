export interface iVendedor {
  get nombre(): string;
  get monto(): number;

  mostrar(): void;
  ocultar(): void;

  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}

export default iVendedor;

