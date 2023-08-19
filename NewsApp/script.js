const API_KEY = "f3f1ad84bb8241daa50128a5671d191a";
const url = "https://newsapi.org/v2/everything?q=";

 

window.addEventListener('load' , () => fetchNews("India"));

 

async function fetchNews(query){
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data =await res.json()
    console.log(data);
}