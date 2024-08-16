import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";

const GeminiApiKey = 'AIzaSyDIsYeBo6PI5i8_KvXETHy2RavQHuGe7EY';

function geminiAI(){
    const gemini = new GoogleGenerativeAI(GeminiApiKey);
    return gemini.getGenerativeModel({
        model : 'gemini-1.5-flash'
    });
    
}

async function generateText(promt ) {
    try {
        const result = await geminiAI().generateContent(promt);
        const response = await result.response;
        return await response.text();
    } catch (error) {
        console.log(error)
    }
}
export default generateText;