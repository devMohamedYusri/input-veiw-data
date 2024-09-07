import '../style/input.css'

export default function Input({type, name ,...rest} ) {
    return (
        <div style={{ margin: '10px 0' }}>
            <label htmlFor={name}>{name}</label>
            {type === 'textarea' ? (
                <textarea className="input"{...rest} id={name} name={name} />
            ) : (
                <input type={type} {...rest} className="input" id={name} name={name} />
            )}
        </div>
    );
}