import  {FaSpinner}  from 'react-icons/fa';
import Styles from './Spinner.module.css';
export default function Spinner(){
    return(
        <div className={Styles.spinner}>
            <FaSpinner className={Styles.spinning} size={50}/>
            
        </div>
    )
}