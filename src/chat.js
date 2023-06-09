import { Configuration, OpenAIApi } from "openai";

//Api key
const configuration = new Configuration({
  apiKey: "",
});

const openai = new OpenAIApi(configuration);

export const peticion = async (prompt) => {

    //respuesta
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens:  2048,
      temperature: 0,
    });
    const text = response.data.choices[0].text;

    return text;
  
};
