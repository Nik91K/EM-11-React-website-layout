import './header.css'
import DateTimeDisplay from './time/time'

type Header = {
    userName: string,
    budgetValue: number,
}

function Header(props: Header) {
    return (
    <div className="HeaderMainDiv">
        <div className='left-div'>
            <p>Hello {props.userName}</p>
        </div>
        <div className='rigth-div'>
            <p>Your budget: ${props.budgetValue}</p>
            <DateTimeDisplay/>
        </div>
        
    </div>
    )
}

export default Header