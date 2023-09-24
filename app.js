const joke = document.getElementById('joke')
const btn = document.getElementById('btn')
const image = document.getElementById('emoji')
const nameImage = [4,5,6]
console.log(image.attributes[1])
console.log(emoji)
async function jokes(){
    const jokeRandom = await fetch('https://v2.jokeapi.dev/joke/pun')
    const response = await jokeRandom.json()
    joke.innerText = response.setup?response.setup:response.joke
    image.attributes[1].value = `images/${nameImage[Math.floor(Math.random() *3)]}.png`
    
}


btn.addEventListener('click',()=>{
    jokes()
})




