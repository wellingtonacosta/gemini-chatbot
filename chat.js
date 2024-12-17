import { chat } from "./inicializaChat.js";
import { incorporarDocumentos, incorporarPergunta, leArquivos } from "./embedding.js";

const arquivos = await leArquivos(["./FAQ.txt"]);
const documentos = await incorporarDocumentos(arquivos);

export async function executaChat(mensagem) {
  let doc = await incorporarPergunta(mensagem, documentos);
  let prompt = mensagem + "formalize frases curtas de 5 a 6 linhas, você também pode utilizar a FAQ para consulta:" + doc.text;
  let result = await chat.sendMessage(prompt);
  return result.response.text();
}