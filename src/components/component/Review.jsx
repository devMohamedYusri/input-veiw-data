import Button from './Button'
import { useLocation, useNavigate } from 'react-router-dom';
export default function Review() {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state || {};

    const onPrev = () => {
        navigate('/', { state: formData });
    }

    const onNext = () => {
        navigate('/final', { state: formData });
    }
    return (
        <div>
            <div>
                <h3>Review Your Information</h3>
                <p>Name : {formData.Name} </p>
                <p>Email : {formData.Email}</p>
                <p>complaint : {formData.Complaint}</p>
            </div>

            <div>
                <Button type="button" value="previous" onClick={onPrev} />
                <Button type="button" value="Next" onClick={onNext} />
            </div>
        </div>
    )
}
