import React from 'react'

const Tab = ({ switchTab, classText, dataTarget, tabText }) => {
  return (
    <span onClick={switchTab} className={classText} data-target={dataTarget}>{tabText}</span>
  )
}

export default Tab