import {useEffect, useState} from "react";


function FortuneReveal ({number, number1, color, onRestart, fortune, setFortune}) {
    const [error, setError] = useState(null)

    useEffect(() => {
        if (fortune) return

        const getFortune = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/fortune", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        color: color,
                        number1: number1,
                        number2: number
                    })
                })
                if (!res.ok) {
                    throw new Error("Sorry we're having trouble loading your fortune. Please try again.")
                }
                const data = await res.json()
                console.log("API Responded: ", data)

                if (data.fortune) {
                    setFortune(data.fortune)
                } else {
                    throw new Error("Sorry we're having trouble loading your fortune. Please try again.")
                }
            } catch(err) {
                console.error(err)
                setError("Sorry we're having trouble loading your fortune. Please try again.")
                }
            }
            getFortune()
        }, [color, number, number1, fortune, error, setFortune])
    return (
        <div>
            <h1>Getting your Fortune.... 🥠</h1>

            {error && <p style={{color: "red"}}>{error}</p>}
            {!error && !fortune && <p>Getting your Fortune 🥠</p>}
            {!error && fortune && <p>{fortune}</p>}
            <button onClick={onRestart}>Reset the Vibes 🧘🏽‍♀️</button>
        </div>
    )
} export default FortuneReveal

//static state fortune reveal

    // const fortunes = [
    //     "Good thing you don't get paid for thinkin'! ",
    //     "Your girlfriend look like my mom!",
    //     "Lebron James is your KING!!!",
    //     "Your friends all think you're the best!",
    //     "I see a hot, rich lifestyle in your future!",
    //     "You be with J-Money servin' everybody!",
    //     "No one wants to tell you.... but you stink.",
    //     "Your mom is HOT!"
    // ]
    //
    // if(!fortune) {
    //     const selected = fortunes[(number - 1) % fortunes.length]
    //     setFortune(selected)
    // }
    //
    // return (
    //     <div>
    //         <h1>Your Fortune Is 🥁...... </h1>
    //         <p>{fortune}</p>
    //         <button onClick={onRestart}> Get Another Fortune</button>
    //     </div>
    // )