import { useState } from 'react';
import { FormStyle } from './style';
import { InputMask } from 'primereact/inputmask';

const Form = () => {
  const [value, setValue] = useState(undefined);
  function sendForm(ev: any) {
    ev.preventDefault();
  }

  return (
    <FormStyle onSubmit={(ev) => sendForm(ev)}>
      <h1>Fale com nossos corretores</h1>
      <input type="text" name="nome" placeholder="Nome" required />
      <input type="email" name="email" placeholder="Email" required />
      <InputMask
        required
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        mask="(99) 99999-9999"
        placeholder="Celular"
      />
      <button type="submit">Enviar</button>
    </FormStyle>
  );
};

export default Form;
