import { FaMicrophone } from "react-icons/fa";
import { ValidationMessage } from "..";

export default function TextareaField() {
  return (
      <div className="w-50">
          <ValidationMessage id='msg' />
          <div className="input-group outer-shadow hover-in-shadow">
              <textarea className="input-control" placeholder="Message" name="message" id="message"></textarea>
              <span id="microphone"><FaMicrophone /></span>
          </div>
      </div>
  )
}
