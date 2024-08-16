import axios from "axios";
import generateText from "../libs/gemini-ai.js";

async function index(req, res) {
  try {
    const id = req.query.github_id;
    const url = "https://api.github.com/users/" + id;

    // Lakukan request ke API GitHub
    const { data } = await axios.get(url);

    // Teks untuk roasting
    const roasterText = `Roasting akun GitHub ini dengan pedas menggunakan bahasa Sunda terutama tentang bio, jumlah followers, dan yang diikuti, datanya: ${JSON.stringify(data)}. Tolong roasting dengan lucu.`;

    // Hasil dari generateText
    const generated = await generateText(roasterText);

    // Response sukses
    res.status(200).json({
      data: {
        result: generated,
      },
    });
  } catch (error) {
    console.error('Error terjadi:', error.message);

    // Tanggapan jika terjadi error
    res.status(500).json({
      error: "Terjadi kesalahan saat memproses permintaan Anda. Silakan coba lagi nanti.",
    });
  }
}

export { index };
