import { ValidationMessage } from ".."

export default function InputFields() {
    const inputFieldData = [
        {
            validationId: "username",
            type: 'text',
            placeholder: 'Full Name',
            name: 'name',
            id: 'user'
        },
        {
            validationId: "emailId",
            type: 'email',
            placeholder: 'Email',
            name: 'email',
            id: 'email'
        },
        {
            validationId: "emailId",
            type: 'text',
            placeholder: 'Subject',
            name: 'subject',
        },

    ]

    return (
        <div className="w-50">
            {inputFieldData.map(({ validationId, type, placeholder, name, id }, index) => (
                <>
                    <ValidationMessage id={validationId} />
                    <div className="input-group outer-shadow hover-in-shadow" key={index}>
                        <input type={type} placeholder={placeholder} className="input-control" name={name} id={id ? id : ""} autoComplete="off" />
                    </div>
                </>
            ))
            }

        </div>

    )
}
