import { config } from '../config/env-config.js';

const DEV_URL = "https://dev.to/api/";
const ARTICLES = "articles?username="

async function getMeArticles() {
  const devDotPosts = await fetch(`${DEV_URL}${ARTICLES}${config.USERNAME}`);
  const res = await devDotPosts.json();
}

getMeArticles()
