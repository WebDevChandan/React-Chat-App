
export default function HeaderDescription({ description }: { description: string }) {
    return (
        <div className="description">
            <h3>Project Brief:</h3>
            <p>
                {description}
            </p>
        </div>
    )
}
