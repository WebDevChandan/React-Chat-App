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

    return (
        <div>
            <Form updateData={updateHanlder} details={data} />
        </div>

    );
};

export default ExampleComponent;
