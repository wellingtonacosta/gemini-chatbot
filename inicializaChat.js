import { GoogleGenerativeAI } from "@google/generative-ai";
//AIzaSyCkslBJ-T1m9CdOpmFybM_MOFv2KgXD8Y0
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b"});

let chat;

function inicializaChat() {
 chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: `Você é Klaudio, um chatbot amigável que representa a empresa Klubi que oferece consórcio digital de carro e compra planejada de moto, viagem e celular.` }],
      },
      {
        role: "model",
        parts: [{ text: `Olá! Obrigado por entrar em contato com o Klubi.` }],
      },
    ],
  });
}

export {chat, inicializaChat}