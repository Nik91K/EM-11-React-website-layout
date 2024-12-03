import './button.css'
import { ButtonType } from '../../../types/types.tsx'

function CreateButton(props: ButtonType) {
  
    return (
      <>
        <button onClick={props.handleClick}>Create</button>
      </>
    )
  }
  
export default CreateButton