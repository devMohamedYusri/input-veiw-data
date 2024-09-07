import '../style/Button.css'
export default function Button({value,...rest}) {
    return (
        <button {...rest}>{value}</button> 
    )
}
