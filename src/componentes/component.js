import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/style.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      apellido: "",
      celular: "",
      email: "",
      city: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const values = JSON.stringify(this.state);
    alert(values);
  };

  render() {
    const { name, apellido, celular, email, city } = this.state;
    return (
      <div className="container">
        <div class="con-top">
          <div class="contact-w3-agile2 contacto" data-aos="flip-left">
            <div class="contact-agileits">
              <h4>Formulario</h4>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="contact-p1">Nombre</label>
                  <input
                    name="name"
                    value={name}
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="contact-p1">Apellido</label>
                  <input
                    name="apellido"
                    value={apellido}
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="contact-p1">Celular</label>
                  <input
                    name="celular"
                    value={celular}
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="contact-p1">Correo</label>
                  <input
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label className="contact-p1">Ciudad</label>
                  <input
                    name="city"
                    value={city}
                    onChange={this.handleChange}
                    className="form-control"
                    type="text"
                  />
                </div>
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                >
                  Guardar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
