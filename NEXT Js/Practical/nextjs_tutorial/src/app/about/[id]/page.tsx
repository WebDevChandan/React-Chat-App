export default function AboutWithId({params}:any) {
    return (
        <div>
            <h1>This is About Page with ID: {params.id}.</h1>
        </div>
    );
}