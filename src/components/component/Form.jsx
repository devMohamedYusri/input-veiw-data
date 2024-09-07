import { useEffect } from 'react';
import '../style/From.css';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';
import {useNavigate,useLocation} from 'react-router-dom';

const inputs = [
    {
        type: 'text',
        name: 'Name',
    },
    {
        type: 'email',
        name: 'Email',
    },
    {
        type: 'textarea',
        name: 'Complaint',
    }
];

export default function Form() {
    const [formData, setFormData] = useState({Name:'',Email:'',Complaint:''});
    const onChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const navigate=useNavigate();
    const location=useLocation();
    useEffect(() => {
        if (location.state) {
            setFormData(location.state);
        }
    }, [location.state]);


    const onclick=()=>{
        if(formData.Name!='' && formData.Email!='' && formData.Complaint!=''){
            navigate('/review-information',{state:formData});
        }else{
            alert("fill the form please with valid data");
        }
    }

    const renderInputs = inputs.map((input) => (
        <Input key={input.name} name={input.name} type={input.type} onChange={onChange} value={formData[input.name]} />
    ));

    return (
        <form>
            {renderInputs}
            <div style={{ width: "400px", textAlign: "center" }}>
                <Button type="button" value="Next" onClick={onclick}/>
            </div>
        </form>
    );
}
