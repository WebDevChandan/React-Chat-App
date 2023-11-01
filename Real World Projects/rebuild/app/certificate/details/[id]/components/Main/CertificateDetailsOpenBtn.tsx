"use client";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CertificateDetailsOpenBtn() {
  const [switchDetailsButton, setSwitchDetailsButton] = useState(false);

  const toggleCertificateDetails = () => {
    setSwitchDetailsButton(!switchDetailsButton);

    const certificateDetailsElement = document.querySelector('.cp-details')! as HTMLElement;
    const certificateInnerDetails = document.querySelector('.cp-details-inner')! as HTMLElement;

    if (!switchDetailsButton)
      certificateDetailsElement.style.maxHeight = `${certificateInnerDetails.offsetHeight}px`;
    else
      certificateDetailsElement.style.maxHeight = `0px`;
      
    certificateDetailsElement?.classList.toggle('active');

  }

  return (
    <div
      onClick={() => toggleCertificateDetails()}
      className="cp-certificate-details-btn cp-project-details-btn outer-shadow hover-in-shadow"
    >
      Certificate Details <i>{switchDetailsButton ? <FaMinus /> : <FaPlus />}</i>
    </div>
  )
}
