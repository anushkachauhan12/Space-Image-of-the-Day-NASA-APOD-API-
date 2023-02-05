let searchButton = document.querySelector("#search")

//add evenet listener to the bottom that runs the function to send api request when it is clicked
searchButton.addEventListener("click", ()=> {
    console.log("button pressed")
    sendApiRequest()
})

//an asynchronous function to fetch data from the API
async function sendApiRequest(){
    let API_KEY = "rwAuawAM8lISjnNPH8bburPz1JRtVdwvxHrt2oMU"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

//function that does something with the data received from API.
//name of the function should be customized to whatever you want.
function useApiData(data){
    document.querySelector("#content").innerHTML += data.explanation
    document.querySelector("#content").innerHTML += `<img src="${data.url}">`
}