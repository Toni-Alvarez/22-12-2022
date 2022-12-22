import React, {useState} from 'react';

     function Formulario() {    
     const [inputCorreo, cambiarInputCorreo] = useState('');
     const [inputEmpresa, cambiarInputEmpresa] = useState('');
    const [inputCalle, cambiarInputCalle] = useState('');
    const [inputNumero, cambiarInputNumero] = useState('');
    const [inputColonia, cambiarInputColonia] = useState('');
    const [InputMunicipio, cambiarInputMunicipio] = useState('');
    const [InputCp, cambiarInputCp] = useState('');
    const [InputEstado, cambiarInputEstado] = useState('');
    const handleFileChange = (event) => {
    
    };
    const [formFields, setFormFields] = useState([
        {  marca: '', modelo:'', serie: '', identificacion:'', puntos:'',referencia:'', equipo:'' }])
    
      const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
      }
      let object = {
        id: Date.now(), // agregamos un id único utilizando la fecha actual
        marca: '',
        modelo: '',
        serie: '',
        identificacion: '',
        puntos: '',
        referencia: '',
        equipo: ''
      }
      const removeField = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
      }
      
      {formFields.map((field, index) => (
        <input
          id={field.id}
          name="marca"
          type="text"
          value={field.marca}
          onChange={event => handleFormChange(event, index)}
        />
      ))}
      

            
      const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
      }
    
      const addFields = () => {
        let object = {
          marca: '',
          modelo: '',
          serie: '',
          identificacion: '',
          puntos: '',
          referencia: '',
          equipo: ''
        }
    
        setFormFields([...formFields, object ])
      }
 //funcion que se encarga de crear y eliminar uno por uno
 const removeFields = (index) => {
  let data = [...formFields];
  data.splice(index, 1)
  setFormFields(data)
}
      
    // Funcion que se encargara de validar los datos y enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        // Comprobamos validacion del formulario ...
        // Si todo es correcto enviamos el formulario

        console.log('Formulario Enviado!');
    }

    
    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputCorreo = (e) => {
        cambiarInputCorreo(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputNombre
    const handleInputEmpresa = (e) => {
        cambiarInputEmpresa(e.target.value);
    }

    const handleInputCalle = (e) => {
        cambiarInputCalle(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputNumero = (e) => {
        cambiarInputNumero(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputColonia = (e) => {
        cambiarInputColonia(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputMunicipio = (e) => {
        cambiarInputMunicipio(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputCp = (e) => {
        cambiarInputCp(e.target.value);
    }

    // Funcion que se encarga de cambiar el estado del inputCorreo
    const handleInputEstado = (e) => {
        cambiarInputEstado(e.target.value);
    }
    // Funcion que se encarga de cambiar el estado del inputCorreo

    return (
        <>   
            <form action="" onSubmit={handleSubmit} className="formulario" >
                <div class="title">INFORMACIÓN PARA EL CERTIFICADO DE CALIBRACIÓN </div>
                <br/>
                    
                <div>
                    <label htmlFor="correo">Correo electronico: </label>
                    <input
                        type="text"
                        name="correo"
                        placeholder="micorreo@gmail.com"
                        id="correo"
                        value={inputCorreo}
                        onChange={handleInputCorreo}
                    />
                </div>
                <div>
                    <label htmlFor="empresa">Empresa o razón social:</label>
                    <input
                        type="text"
                        name="empresa"
                        placeholder="Ingrese el Nombre de su empresa o razón social"
                        id="empresa"
                        value={inputEmpresa}
                        onChange={handleInputEmpresa}
                    />
                </div>
                <h2>Dirección: </h2>
                <br/>
                <div>
                    <label htmlFor="calle">Calle:</label>
                    <input
                        type="text"
                        name="calle"
                        placeholder="Ingrese la calle de la dirección de su empresa"
                        id="calle"
                        value={inputCalle}
                        onChange={handleInputCalle}
                    />
                </div>
                <div>
                    <label htmlFor="numero">Número:</label>
                    <input
                        type="text"
                        name="numero"
                        placeholder="Ingrese el número de su dirección de empresa, ejemplo: #327"
                        id="numero"
                        value={inputNumero}
                        onChange={handleInputNumero}
                    />
                </div>
                <div>
                    <label htmlFor="colonia">Colonia:</label>
                    <input
                        type="text"
                        name="colonia"
                        placeholder="Ingrese la colonia de su empresa"
                        id="colonia"
                        value={inputColonia}
                        onChange={handleInputColonia}
                    />
                </div>
                <div>
                    <label htmlFor="municipio">Municipio:</label>
                    <input
                        type="text"
                        name="municipio"
                        placeholder="Ingrese el municipio de su empresa"
                        id="municipio"
                        value={InputMunicipio}
                        onChange={handleInputMunicipio}
                    />
                </div>
                <div>
                    <label htmlFor="cp">Código Postal:</label>
                    <input
                        type="text"
                        name="cp"
                        placeholder="Ingrese el código postal de su empresa"
                        id="cp"
                        value={InputCp}
                        onChange={handleInputCp}
                    />
                </div>
                <div>
                    <label htmlFor="estado">Estado:</label>
                    <input
                        type="text"
                        name="estado"
                        placeholder="Ingrese el Estado de la ubicación dónde se encuentra su empresa"
                        id="estado"
                        value={InputEstado}
                        onChange={handleInputEstado}
                    />
                </div>
                <br/>
                <h2>Agregar Instrumentos </h2>
                
  
                <div>
      <p style={{color: 'red'}}>
        En caso de ya contar con el excel con estos datos, favor presionar el botón rojo de eliminar y de subir el excel en el botón de seleccionar archivo
      </p>
    </div>
   <table class="table">
  <thead>
  <tr>
  <th scope="col" style={{ padding: '10px' }}>
                    Equipo o Instrumento
                  </th>
                  <th scope="col" style={{ padding: '60px' }}>
                    Marca
                  </th>
                  <th scope="col" style={{ padding: '80px' }}>
                    Modelo
                  </th>
                  <th scope="col" style={{ padding: '80px' }}>
                    Serie
                  </th>
                  <th scope="col" style={{ padding: '40px' }}>
                    No. de Inventario
                  </th>
                  <th scope="col" style={{ padding: '10px' }}>
                    Puntos a calibrar
                  </th>
                  <th scope="col" style={{ padding: '10px' }}>
                    Referencia con la que se declara la conformidad
                  </th>
                </tr>
  </thead>
</table>
             
                <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (           
            <div key={index}>
  <table>
  <tr>
  <td style={{ verticalAlign: "middle" }}>
    <br></br>
    <br></br>
      <input
        name='equipo'
        placeholder='Equipo o Instrumento'
        onChange={event => handleFormChange(event, index)}
        value={form.equipo}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
    <br></br>
      <br></br>
      <input
        name='marca'
        placeholder='Marca'
        onChange={event => handleFormChange(event, index)}
        value={form.marca}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
    <br></br>
      <br></br>
      <input
        name='modelo'
        placeholder='Modelo'
        onChange={event => handleFormChange(event, index)}
        value={form.modelo}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
    <br></br>
    <br></br>
      <input
        name='serie'
        placeholder='Serie'
        onChange={event => handleFormChange(event, index)}
        value={form.serie}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
      <br></br>
      <br></br>
      <input
        name='identificacion'
        placeholder='No. De inventario'
        onChange={event => handleFormChange(event, index)}
        value={form.identificacion}
      />
    </td>
    <td style={{ verticalAlign: "middle" }}>
    <br></br>
      <br></br>
      <input
        name='puntos'
        placeholder='Puntos a calibrar'
        onChange={event => handleFormChange(event, index)}
        value={form.puntos}
      />
    </td>
    <text>
    <td style={{ verticalAlign: "middle" }}>
    <br></br>
      <br></br>
      <input
        name='referencia'
        placeholder='Referencia con la que declarará conformidad'
        onChange={event => handleFormChange(event, index)}
        value={form.referencia}
       />    
    </td>
    </text>
  </tr>
</table>
<button
            onClick={() => removeFields(index)}
            style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '10px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '13px',
                cursor: 'pointer',
            }}>
            Eliminar
        </button>

            </div>
          )
          
        })}
      </form>
      <button onClick={addFields}
      style={{
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '13px',
        cursor: 'pointer',
    }}
      >Agregar Nuevo Instrumento.</button>
      </div>
      <br></br>
      <button style={{ width: "100%", height: "100%" }}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ width: "100%", height: "100%" }}
      />
    </button>          
                
      <button type="submit">Enviar</button>
            </form> 
       </>
    );
}
 
export default Formulario;

