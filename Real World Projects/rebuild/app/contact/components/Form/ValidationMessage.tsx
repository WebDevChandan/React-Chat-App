import React from 'react'

export default function ValidationMessage({ id }: { id: string }) {
    return (
        <span id={id} className="valid_msg"></span>
    )
}
