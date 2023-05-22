import { useState } from 'react';
import { FormStyle } from './style';
import { InputMask } from 'primereact/inputmask';
import { fetcher } from '@services/fetchers';

const Form = () => {
  const [value, setValue] = useState(undefined);
  function sendForm(values: any) {
    const dataCvCRM = {
      nome: values.target.name.value,
      email: values.target.email.value,
      telefone: values.target.tel.value,
      permitir_ateracao: true,
      idempreendimento: 4,
      origem: 'SI',
      midia: 'Google LP',
      conversao: 'CoreAg',
    };
    return fetcher
      .post('https://agvelasco.cvcrm.com.br/api/cvio/lead', dataCvCRM)
      .then((res) => {
        alert(
          'Recebemos seu formulário.\n\n Entraremos em contato com você em breve',
        );
        return res;
      })
      .catch(() =>
        alert(
          'Ops... Houve um erro ao enviar seu formulário.\n\n Por favor tente novamente mais tarde.',
        ),
      );
  }

  return (
    <FormStyle onSubmit={(ev) => {
        ev.preventDefault()
        sendForm(ev)
      }}>
      <h1>Fale com nossos corretores</h1>
      <input type="text" name="name" placeholder="Nome" required />
      <input type="email" name="email" placeholder="Email" required />
      <InputMask
        required
        name='tel'
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        mask="(99) 99999-9999"
        placeholder="Celular"
      />
      <button type="submit">Enviar</button>
      <span>Informe seus dados para que possamos retornar o contato e realizar um atendimento exclusivo.</span>
    </FormStyle>
  );
};

export default Form;
