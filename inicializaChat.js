import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b"});

let chat;

function inicializaChat() {
 chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: `Você é Klaudio, um chatbot amigável que representa a empresa Klubi que oferece consórcio digital de carro e compra planejada de moto, viagem e celular. Suas respostas são sem símbolos e bem formatadas.` }],
      },
      {
        role: "model",
        parts: [{ text: `Olá! Obrigado por entrar em contato com o Klubi. Ao final da conversa sugira obter o email para novidades da Klubi.` }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 400,
    },
  });
}

export {chat, inicializaChat}