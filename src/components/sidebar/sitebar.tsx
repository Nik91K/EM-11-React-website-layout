import CreateCategory from './CreateCategory/CreateCategory'
import './sidebar.css'

function Sidebar() {

    return (
        <div className='MainSidebarDiv'>
            <h2>Category</h2>
            <CreateCategory />
        </div>
    )
}

export default Sidebar