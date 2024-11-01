import { useState } from 'react';
import data from "../data/data"

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (formState.name == '') {
      newErrors.nome = 'O nome é obrigatório.';
    }


    if (formState.email == '') {
      newErrors.email = 'O email é obrigatorio.';
    }

    if (formState.message == '') {
      newErrors.message = 'A mensagem é obrigatoria.';
    }

    return newErrors;
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
    }));

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); 
    setErrors(validationErrors); 

    if (Object.keys(validationErrors).length === 0) {
      const newUser = {
        id: Math.random(), 
        ...formState
      };
      data.push(newUser)
      console.log(data);
      setFormState({ name: '', email: '', message: ''});
    }
  };


return(
    <div className='wrapper'>

      <form onSubmit={handleSubmit} className="forms">
        <h1 style={{ color: 'black' }}>Contato</h1>

        <div className="input-box">
          <input
            placeholder='username'
            type="text"
            name="name"
            value={formState.name} 
            onChange={handleChange}
          />
          {errors.nome && <p style={{ color: 'red' }}>{errors.nome}</p>}
        </div>

        <div className="input-box">
          <input
            placeholder='email'
            type="text"
            name="email"
            value={formState.email} 
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div className="input-box">
          <textarea
            placeholder='message'
            type="text"
            name="message"
            value={formState.message} 
            onChange={handleChange}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>

        <button className="btn" type="submit">Enviar</button>
      </form>
    </div>
  )
  }
  
  export default Contact;