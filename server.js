const express = require('express');
const translate = require('google-translate-api-x');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/translate', async (req, res) => {
  try {
    const { text, targetLanguage } = req.body;
    const result = await translate.translate(text, { to: targetLanguage });
    res.json({ translatedText: result[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});