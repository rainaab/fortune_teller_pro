function ColorSelect ({onSelect}) {
    const colors = ["blue", "green","pink", "purple"]

    return (
        <div>
            <h1>Pick A Color Cutie!</h1>
            <div>
                {colors.map((color) => (
                    <button key={color} onClick={() => onSelect(color)}>
                    {color}
                    </button>
                ))}
            </div>
        </div>

    )

}
export default ColorSelect