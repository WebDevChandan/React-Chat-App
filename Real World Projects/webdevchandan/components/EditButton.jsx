import { FaEdit } from "react-icons/fa"

const EditButton = ({ editContentFun }) => {
  return (
    <button onClick={editContentFun} className="edit-btn btn-1 outer-shadow hover-in-shadow" >Edit</button>
  )
}

export default EditButton