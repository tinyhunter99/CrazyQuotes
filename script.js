const quotes=document.getElementById('quotes')
const author=document.getElementById('author')
const btn=document.getElementById('btn')

let data="";

const getNewQuotes=()=>{
    let random_no=Math.floor(Math.random()*1643);
    // console.log(random_no)
    // console.log(data[random_no].author)
    quotes.innerText=`${data[random_no].text}`;

    if(data[random_no].author===null){
        author.innerText="By Unknown";
    }else{
        author.innerText=`${data[random_no].author}`;
    }

}

const getQuotes=async ()=>{
    try{
        const response=await fetch('https://type.fit/api/quotes');
        // console.log(response)
        data=await response.json()
        // console.log(data)
        // console.log(data[0].text)
        // console.log(data[0].author)

        getNewQuotes();

    }catch(error){
        console.log("Error in fetching the data ",error)
    }
}


btn.addEventListener('click',getNewQuotes)
getQuotes();