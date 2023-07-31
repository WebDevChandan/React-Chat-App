import React from 'react'

const SectionTitle = ({ subTitle , title}) => {
  return (
      <div className="row">
          <div className="section-title">
              <h2 data-heading={subTitle}>{title}</h2>
          </div>
      </div>
  )
}

export default SectionTitle