"use client"
import { useState } from 'react';

const Form = ({ updateData, setData }) => {
    const [formData, setFormData] = useState("");
    
    return (
        <>
            <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />

            <br />
            <br />
            <button onClick={async () => {
                await setData(await updateData(formData));
            }}>
                Update
            </button>
        </>
    )
}

export default Form