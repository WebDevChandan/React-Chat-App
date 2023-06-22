import { FC, useState, ChangeEvent } from 'react'
import { HairColor } from './Enums';
import { User } from './Interfaces';

//Defining this component as Functional Component
const Person: FC<User> = ({ name, age, email, hairColor }) => {
    const [country, setCountry] = useState<string | null>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);

    }
    return (
        <div>
            <h1>Person name is {name} and his age is {age}</h1>
            <input onChange={handleChange} type="text" placeholder='Write your country...' />
            <p>{country}</p>
            <p>{hairColor}</p>
        </div>
    )
}

export default Person;