import './header.css'
import DateTimeDisplay from './time/time'

type Header = {
    userName: string,
    budgetValue: number,
}

function Header(props: Header) {
    return (
    <div className="HeaderMainDiv">
        <div>
            <p>Hello {props.userName}</p>
        </div>
        <div>
            <p>Your budget: ${props.budgetValue}</p>
            <DateTimeDisplay/>
        </div>
        
    </div>
    )
}

export default Header