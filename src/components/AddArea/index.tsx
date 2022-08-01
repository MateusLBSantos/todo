import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
// onEnter é uma função que não tem retorno, mas que recebe um parametro.
    onEnter: (taskName: string) => void 
}

export const AddArea = ({ onEnter }: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => { // KeyboardEvent verifica o evento onKeyUp
        //console.log(e.code); // code utilizado no evento mostra o codigo no console.
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText); // inputText está no value da tag input
            setInputText('');
        }
    }

    return(
        <C.Container>
            <div className='image'>➕</div>
            <input 
            type="text"
            placeholder='Adicione uma tarefa'
            value={inputText}
            onChange={e=>setInputText(e.target.value)} // evento representado por e vai pegar o que está no campo e setar no setInputText
            onKeyUp={handleKeyUp} //evento do JavaScript onKeyUp que pega ação da tecla.
            />
        </C.Container>
    );
}