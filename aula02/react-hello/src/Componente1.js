import React from 'react';
import {Lista} from './Lista'

export class Componente1 extends React.Component{

    initialState = {
        nome : '',
        idade : '',
        email: '',
        telefone : '',
        cep : '',
        dataNascimento : '',
        categorias : ['INFORMATICA', 'REDES', 'ADM']
    }

    state = this.initialState
    
    Limpar(){
        this.setState(this.initialState);
    }

    componentDidMount(){
        setTimeout(_ => this.setState({...this.state, nome : 'Raione'}), 3000);
        setTimeout(_ => this.Limpar(), 10000);
    }

    renderLista(){
        return this.state.categorias.map((cat, index) => <Lista key={index} texto={cat} />)

    }

    render(){
        return (
            <div>
                <h1>Meu Primeiro Componente - {this.state ? this.state.nome : ''}</h1>
                    <ul>
                        {this.state.categorias.map((cat,index) => <Lista key={index} texto={cat} />)}
                    </ul>
            </div>
        );
        
    }
}