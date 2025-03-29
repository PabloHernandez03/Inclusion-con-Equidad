const fetch = require('node-fetch');

const PAGE_ID = 'your-page-id'; // Reemplaza con el ID de la página
const ACCESS_TOKEN = 'your-access-token'; // Reemplaza con tu token de acceso

async function getFacebookPosts() {
  const url = `https://graph.facebook.com/v17.0/${PAGE_ID}/posts?access_token=${ACCESS_TOKEN}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data); // Muestra las publicaciones en la consola
    return data;
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
  }
}

getFacebookPosts();
