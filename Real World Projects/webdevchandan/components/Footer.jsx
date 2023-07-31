import React from 'react'

const Footer = ({classText}) => {
  return (
      <p className={classText}>
      Copyright &copy; 2022-2023 WebDevChandan {classText !="copyright-text"?"| Inc. All Rights Reserved":null}
      </p>
  )
}

export default Footer