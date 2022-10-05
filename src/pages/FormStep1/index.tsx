import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

//context
import { useForm, FormActions } from '../../contexts/FormContext';

//styled-components
import * as C from './styles';

//components
import { Theme } from '../../components/Theme';


export const FormStep1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    });
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      return navigate("/step2");
    } else {
      alert("Preencha os dados");
    };
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label >
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}