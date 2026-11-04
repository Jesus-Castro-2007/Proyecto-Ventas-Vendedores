export interface iVenta {
  // [INT-05] Evento disparador para solicitar un nuevo elemento
  onNuevoVendedor(callback: () => void): void;

  // [INT-06] Método de reporte con objeto destructurado tipado
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
  }): void;
}

export default iVenta;
