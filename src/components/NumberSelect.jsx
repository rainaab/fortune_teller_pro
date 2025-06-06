function NumberSelect ({onSelect,round = 1}) {
    const numbers = [1,2,3,4,5,6,7,8]

    // const shuffleCount = typeof color === "string" ? color.length : color
    const shuffled = [...numbers].sort(() => 0.5 - Math.random()).slice(0,4)
        // .sort(() => .5 - Math.random())
        // .slice(0,4)

    return(
        <>

            <h1>{round === 1 ? "Now, Pick A Number!" : "Almost There! Pick Another Number To Reveal Your Fortune"}</h1>
            <div>
                {shuffled.map ((num) => (
                    <button key={num} onClick={() => onSelect(num)}>
                        {num}
                    </button>
                ))}
            </div>
        </>

    )
}
export default NumberSelect