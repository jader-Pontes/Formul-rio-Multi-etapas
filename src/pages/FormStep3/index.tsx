import { Link, useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

//context
import { useForm, FormActions } from '../../contexts/FormContext';

//styled-componente
import * as C from './styles';

//components
import { Theme } from '../../components/Theme';

export const FormStep3 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3
      });
    }
  }, [])

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state);
    } else {
      alert("Preencha os dados")
    };

  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value
    });
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>
        <hr />
        <label >
          Qual seu e-mail?
          <input
            type="email"
            value={state.email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          Qual seu GitHub?
          <input
            type='url'
            value={state.github}
            onChange={handleGitHubChange}
          />
        </label>
        <Link to='/step2' className='backButton'>Anterior</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  )
}