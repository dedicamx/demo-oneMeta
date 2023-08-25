function loadingGif() {
    let timerInterval
Swal.fire({
  title: 'Sending...',
  html: '',
  timer: 40000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
   
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
})}
function splitContent(){
  const test=  `Summary:
  The speaker at the Archdiocesan Discipleship Conference shares a personal story about a family trip to the UK. Feeling nervous about the journey, the speaker prays for a successful trip and for their Uber ride to the airport to accommodate their large family and luggage. They receive a text message stating that their Uber driver, named Jesus, is arriving in a Toyota Highlander. The speaker humorously interprets this as a divine sign, and shares this story with their children. They eventually reach the UK and have a great time.
  Sentiment Analysis:
  The overall sentiment of the text is positive. The speaker expresses initial anxiety about the trip, but this is replaced with humor and joy after interpreting their Uber driver's arrival as a divine sign. The successful trip to the UK further contributes to the positive sentiment.
  Tweets:
  1. "When you're nervous about a trip and your Uber driver named Jesus shows up in a Toyota Highlander. #DivineIntervention #TravelStories"
  2. "Prayed for a successful family trip to the UK and got more than we bargained for. Our Uber driver Jesus turned out to be our guardian angel. #Blessed #FamilyVacation"
  3. "Who says miracles don't happen? Our Uber to the airport was a Toyota Highlander driven by Jesus. #Miracles #TravelDiaries"
  Blog Post Entry:
  "Title: A Divine Ride to the Airport
  During our family trip to the UK, we experienced something extraordinary. On the day of our departure, filled with anxiety, we prayed for a successful journey. As we waited for our Uber, a text message popped up on my phone - 'Jesus is arriving soon in a Toyota Highlander.' We couldn't help but see this as a divine sign. Our ride to the airport was filled with laughter and joy as we shared this humorous coincidence with our children. This unexpected event not only eased our travel anxiety but also made our trip to the UK even more memorable. It's moments like these that remind us of the unexpected joys of travel and the divine humor that life sometimes throws our way."`
    const summaryIndex=test.indexOf('Summary:');
    const sentimentIndex=test.indexOf('Sentiment Analysis:');
    const tweetsIndex=test.indexOf('Tweets:');
    const blogPostIndex=test.indexOf('Blog Post Entry:');
    const summaryContent=test.slice(summaryIndex,sentimentIndex).replace('Summary:','');
    console.log(summaryContent);

}

function queryResponse(result)
{
    const x = JSON.parse(result);
    if(result && result!=undefined ){
         const AnswerDiv = document.getElementById('div-answer');
    const AnswerField =document.getElementById('text-answer')
    AnswerDiv.style.display = 'block';
    AnswerField.value=x["out-0"]
    }else{
        Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text:result,
})
    }
   
    
}

