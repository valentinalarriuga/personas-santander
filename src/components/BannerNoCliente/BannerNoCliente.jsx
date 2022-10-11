import banner from "../../images/nocliente.png";

import "./BannerNoCliente.scss";

const BannerNoCliente = () => {
  return (
    <div className="no-cliente">
      <img src={banner} />
      <a
        target={"_blank"}
        href="https://productos.santander.com.ar/personas/cuentas-y-paquetes/super-cuenta"
      >
        Pedila ahora
      </a>
    </div>
  );
};

export default BannerNoCliente;
