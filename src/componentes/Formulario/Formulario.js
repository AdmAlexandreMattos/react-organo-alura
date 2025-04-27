import { CampoTexto } from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

export const Formulario = (props) => {
    const times = [
        "programação",
        "Front-End",
        "Data Science",
        "Devops",
        "UX e Desing",
        "Mobile",
        "Inovação e Gestão",
    ]

    return (
        
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}