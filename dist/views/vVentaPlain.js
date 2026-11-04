export default class vVentaPlain {
    constructor() {
        this.btNuevo = document.getElementById("body_btNuevoVendedor");
        this.lblVentasMenorIgual100 = document.getElementById("body_lblVentasMenorIgual100");
        this.lblVentasMayor100 = document.getElementById("body_lblVentasMayor100");
        this.lblTotalVentas = document.getElementById("body_lblTotalVentas");
        this.lblMenorVenta = document.getElementById("body_lblMenorVenta");
        this.lblPromVenta = document.getElementById("body_lblPromVenta");
    }
    onNuevoVendedor(callback) {
        this.btNuevo.onclick = callback;
    }
    reportar({ totalVentas, ventasMenorIgual100, ventasMayor100, menorVenta, promVenta, }) {
        this.lblVentasMenorIgual100.innerHTML = `${ventasMenorIgual100}`;
        this.lblVentasMayor100.innerHTML = `${ventasMayor100}`;
        this.lblTotalVentas.innerHTML = `${totalVentas}$`;
        this.lblMenorVenta.innerHTML = `${menorVenta}$`;
        this.lblPromVenta.innerHTML = `${promVenta.toFixed(2)}$`;
    }
}
