/* eslint-env node */
import express from 'express'
import cors from 'cors'

import {config} from "dotenv"
import {OpenAI} from "openai"

config()
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY} )

app.post('/api/fortune', async (req, res) => {
    const {color, number1,number2} = req.body

    const prompt = 'Please create a short, unhinged fortune based on:' +
        `- Color: ${color}
         - Num1: ${number1}
         - Num2: ${number2}
         Please keep it short and sweet. With a TikTok, gen-z, brain-rot vibe`

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: prompt}],
            max_tokens: 50

        })
        const fortune = response.choices[0].message.content
        res.json({fortune})
    } catch (err) {
        console.error(err)
        res.status(500).json({error:"Failed to generate fortune." })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on https://localhost: ${PORT}`)
})