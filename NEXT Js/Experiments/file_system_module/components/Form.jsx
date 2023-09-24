"use client"
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Form = ({ updateData, details }) => {
    const [formData, setFormData] = useState("");
    const router = useRouter();

    return (
        <>
            <p>Name: {details.name}</p>
            <p>Age: {details.age}</p>
            <p>City: {details.city}</p>

            <br />
            <input type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />

            <br />
            <br />
            <button onClick={async () => {
                await updateData(formData);
                router.refresh();
            }}>
                Update
            </button>
        </>
    )
}

export default Form