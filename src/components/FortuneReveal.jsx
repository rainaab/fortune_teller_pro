function FortuneReveal ({number, onRestart, fortune, setFortune}) {

    const fortunes = [
        "Good thing you don't get paid for thinkin'! ",
        "Your girlfriend look like my mom!",
        "Lebron James is your KING!!!",
        "Your friends all think you're the best!",
        "I see a hot, rich lifestyle in your future!",
        "You be with J-Money servin' everybody!",
        "No one wants to tell you.... but you stink.",
        "Your mom is HOT!"
    ]

    if(!fortune) {
        const selected = fortunes[(number - 1) % fortunes.length]
        setFortune(selected)
    }

    return (
        <div>
            <h1>Your Fortune Is 🥁...... </h1>
            <p>{fortune}</p>
            <button onClick={onRestart}> Get Another Fortune</button>
        </div>
    )
} export default FortuneReveal