import { useNavigate, Link } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

//context
import { useForm, FormActions } from '../../contexts/FormContext';

//styled-component
import * as C from './styles';

//components
import { Theme } from '../../components/Theme';


export const FormStep2 = () => {

  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      return navigate('/')
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2
      });
    }
  }, [])

  const handleNextStep = () => {
    if (state.name !== '') {
      return navigate("/step3");
    } else {
      alert("Preencha os dados");
    };
  };

  const setLevel = (level: number) => {
    dispatch({
      type: FormActions.setLevel,
      payload: level
    })
  }

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name},o que melhor descreve você</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual,profissionalmente.</p>
        <hr />
        <SelectOption
          title='Sou iniciante'
          description="Começei a programar a menos de 2 anos"
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title='Sou programador'
          description="Já programo há 2 anos ou mais"
          icon="😎"
          selected={state.level === 1}
          onClick={() => setLevel(1)}

        />
        <Link to="/" className='backButton'>Voltar</Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  )
}