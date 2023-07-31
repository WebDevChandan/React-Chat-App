import Link from 'next/link'
import React from 'react'

const Button = ({ hrefText, btnType, btnText, target, }) => {
    return (
        <Link href={hrefText} className={`${btnType} outer-shadow hover-in-shadow`} target={(target) ? target : null} >{btnText}</Link>
    )
}

export default Button