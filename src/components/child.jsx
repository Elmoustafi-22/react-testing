

function Child({count}) {
    return (
        <div  className="mt-4">
            <p data-testid="count-value">{count}</p>
        </div>
    );
}

export default Child;