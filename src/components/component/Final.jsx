import Button from './Button'
import { useNavigate, useLocation } from 'react-router-dom';
export default function Final() {
    const navigate = useNavigate();
    const location=useLocation();
    const formData=location.state|| {};
    const onPrev=()=>{
        navigate('/review-information',{state:formData});
    }
    return (
    <div>
            <p>Thank you for Your submission</p>
            <Button type="button" value="previous" onClick={onPrev}/>
    </div>
    )
}
