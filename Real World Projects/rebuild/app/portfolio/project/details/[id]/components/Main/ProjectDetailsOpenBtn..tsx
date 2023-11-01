"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ProjectDetailsOpenBtn() {
  const [toggleProjectDetailsBtn, setToggleProjectDetailsBtn] = useState(false);

  const toggleProjectDetails = () => {
    setToggleProjectDetailsBtn(!toggleProjectDetailsBtn);

    const projectDetailsElement = document.querySelector('.pp-details')! as HTMLElement;
    const projectInnerDetails = document.querySelector('.pp-details-inner')! as HTMLElement;

    if (!toggleProjectDetailsBtn)
      projectDetailsElement.style.maxHeight = `${projectInnerDetails.offsetHeight}px`;
    else
      projectDetailsElement.style.maxHeight = `0px`;

    projectDetailsElement?.classList.toggle('active');
  }

  return (
    <div
      className="pp-project-details-btn outer-shadow hover-in-shadow"
      onClick={() => toggleProjectDetails()}>
      Project Details <i>{toggleProjectDetailsBtn ? <FaMinus /> : <FaPlus />}</i>
    </div>
  )
}
