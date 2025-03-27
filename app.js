const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/github/profile', async (req, res) => {
  const username = req.query.username; 

  if (!username) {
    return res.status(400).json({ message: 'O parâmetro "username" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);

    const userProfile = {
      username: response.data.login,
      name: response.data.name || 'Nome não disponível',
      bio: response.data.bio || 'Bio não disponível',
      location: response.data.location || 'Localização não disponível',
      followers: response.data.followers,
      public_repos: response.data.public_repos,
      avatar_url: response.data.avatar_url,
      html_url: response.data.html_url
    };

    res.json(userProfile);
  } catch (error) {
    console.error('Erro ao acessar a API do GitHub:', error);

    if (error.response && error.response.status === 404) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    res.status(500).json({ message: 'Erro ao acessar a API do GitHub.' });
  }
});

app.listen(port, () => {
  console.log(`API GitHub rodando na porta ${port}`);
});