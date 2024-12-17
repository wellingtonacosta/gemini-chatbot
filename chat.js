import { chat } from "./inicializaChat.js";
import { incorporarDocumentos, incorporarPergunta, leArquivos } from "./embedding.js";

const arquivos = await leArquivos(["./FAQ.txt"]);
const documentos = await incorporarDocumentos(arquivos);

export async function executaChat(mensagem) {
  let doc = await incorporarPergunta(mensagem, documentos);
  let prompt = mensagem + "talves esse trecho de ajude a formular a resposta: " + doc.text;
  let result = await chat.sendMessage(prompt);
  return result.response.text();
}