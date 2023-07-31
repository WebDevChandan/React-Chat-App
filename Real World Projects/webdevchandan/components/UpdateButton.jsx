import { GrUpdate } from 'react-icons/gr'

const UpdateButton = () => {
    return (
        <button className="edit-btn btn-1 outer-shadow hover-in-shadow">Update <GrUpdate style={{ transform: 'translate(4px, 2px)' }} /></button>
    )
}

export default UpdateButton