/* eslint-env node */
import express from 'express'
import cors from 'cors'

import {config} from "dotenv"
import {OpenAI} from "openai"

config()
const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY} )

app.post('/api/fortune', async (req, res) => {
    // const {color, number1,number2} = req.body

    const prompt = "Please create a short, unhinged fortune-style message as if you were a person obsessed with " +
        "some vine core and thebrain-rot side of tiktok and a little petty. Add some black culture and delusion to " +
        "the fortune. Dont be PG-13 we all grown here. Keep it punchy with one-liners. Here are some examples of the " +
        "vibe I am going for. “God gives his hardest battles to his baddest delulus. Lace up.”, " +
        "“He’s not your soulmate. He’s your karmic lesson. Swipe again.” " +
        "Dont mention the user inputs and keep it light, short,funny, and gender-neutral. remember to keep it short!"

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{role: "user", content: prompt}],
            max_tokens: 50,
            temperature: 1
        })
        const fortune = response.choices[0].message.content
        res.json({fortune})
    } catch (err) {
        console.error(err)
        res.status(500).json({error:"Failed to generate fortune." })
    }
})


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})