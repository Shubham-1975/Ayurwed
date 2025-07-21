import axios from "axios";

export const TranslateText = async (text, targetLang = "hi") => {
  try {
    const response = await axios.post(
      "https://libretranslate.de/translate",
      {
        q: text,
        source: "en",
        target: targetLang,
        format: "text",
      },
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    return response.data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text; // fallback to original
  }
};
