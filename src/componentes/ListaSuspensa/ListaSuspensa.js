import './ListaSuspensa.css'

export const ListaSuspensa = (props) => {
    return (
        <div className='campo-lista-suspensa'>
            <label>{props.label}</label>
            <select required={props.obrigatorio}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}