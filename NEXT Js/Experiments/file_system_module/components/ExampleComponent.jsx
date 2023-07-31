import Form from "./Form";

const fetchData = async () => {
    const response = await fetch(process.env.URL + '/api/getData/');
    const data = await response.json();
    return data;
}

const updateHanlder = async (formData) => {
    "use server";
    const response = await fetch(process.env.URL + '/api/updateData/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData,
    })
    const data = await response.json();
    return data;
}

const ExampleComponent = async () => {
    let data = await fetchData();

    const setUpdateData = async(getUpdData) => {
        "use server"
        console.log(data);
        data.name = getUpdData;
        
    }


    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>City: {data.city}</p>

            <br />
            <Form updateData={updateHanlder} setData={setUpdateData} />

        </div>

    );
};

export default ExampleComponent;
