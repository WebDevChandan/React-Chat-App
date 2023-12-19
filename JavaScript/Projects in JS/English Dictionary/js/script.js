const wrapper = document.querySelector(".wrapper"),
  searchInput = wrapper.querySelector("input"),
  wordCrosser = wrapper.querySelector(".search span"),
  infoText = wrapper.querySelector(".info-text"),
  speaker = document.querySelector(".word .fa-volume-up");

let audio = new Audio(),
  wordTracker = [];
  
  
  //fetchApi Function Defined
  function fetchApi(word) {
  infoText.style.color = "#000";
  infoText.innerHTML = `Searching the meaning of <span>"${word}"</span>`; 

  // Using dictionary.dev api for this Dictionary API
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  //data function
  function data(result, word) {
    //If api returns teh message of can't find word
    if (result.title) {
      infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>. Please, try to search other word.`;
      wrapper.classList.remove("active");
    } else {
      wrapper.classList.add("active");
      // let's pass the particular response data to a particular html element

      let definitions =
          result[0].meanings[result[0].meanings.length - 1].definitions[0],
        phonetics = `${
          result[0].meanings[result[0].meanings.length - 1].partOfSpeech
        } ${result[0].phonetics[result[0].phonetics.length - 1].text}`,
        synonyms = result[0].meanings[result[0].meanings.length - 1].synonyms;

      // Word Content
      document.querySelector(".word p").innerText = result[0].word;
      document.querySelector(".word span").innerText = phonetics;

      // Meaning Content
      document.querySelector(".meaning span").innerText =
        definitions.definition;

      // Example Content
      document.querySelector(".example span").innerText = definitions.example
        ? definitions.example
        : result[0].meanings[0].definitions[0].example
        ? result[0].meanings[0].definitions[0].example
        : "Not Available";

      //Synonyms Content
      //Removing all synonyms of previous word if existed there
      document.querySelectorAll(".synonyms span").forEach((sp) => {
        sp.remove();
      });

      if (synonyms.length !== 0) {
        document.querySelector(
          ".synonyms"
        ).style.display = 'block';

        for (let i = 0; i < synonyms.length; i++) {
          let spanElnt = document.createElement("span");
          spanElnt.append(`${synonyms[i]},`);

          document
            .querySelector(".synonyms .list")
            .insertAdjacentElement("afterbegin", spanElnt);

          spanElnt.addEventListener("click", () => {
            fetchApi(spanElnt.innerText.replace(/[,]/g, ""));
            searchInput.value = `${spanElnt.innerText.replace(/[,]/g, "")}`;
            wordTracker.push(word);
            document.querySelector(".fa-arrow-left").classList.add('show');
          });
        }
      } else {
        document.querySelector(
          ".synonyms"
        ).style.display = 'none';
      }
      
      // Speaker
      let getAudio = `${result[0].phonetics[0].audio}`;
      if (!getAudio) {
        speaker.style.display = 'none';
      } else {
        speaker.style.display = 'block';
        
          speaker.addEventListener("click", () => {
          audio.setAttribute("src", getAudio);
                
          var isAudioPlaying = audio.currentTime > 0 && !audio.paused && audio.ended && audio.readyState > audio.HAVE_CURRENT_DATA;
          
          if (!isAudioPlaying) {
            speaker.style.color = "#4d59fb";
            audio.play();
          }
          setInterval(() => {
              if (audio.paused) {
                speaker.style.color = "";
              }
        }, 500);
          
        });
      }
    }
  }


  //Fetching the API URL response and returning it with parsing into JS object
  //and in another then method calling user-defined data() function with passing Api (Json Parsed response) as 'result' and serched word as 'word' as argument.
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((result) => {
      data(result, word);
  })
}


// Move to previous Word
document.querySelector(".fa-arrow-left").addEventListener("click", () => {
  let prevWord = wordTracker.pop();
  if (wordTracker.length===0) document.querySelector(".fa-arrow-left").style.display = "none";
  if (prevWord) {
    searchInput.value = prevWord;
    fetchApi(prevWord);
  }
});
    
searchInput.addEventListener('keyup', e => {
    // If pressed key is Enter and the input field is not empty then call fetchApi Function
    if (e.key === 'Enter' && e.target.value){
      fetchApi(e.target.value);
   }
    if (e.key === 'Enter'){
      document.querySelector(".fa-arrow-left").classList.remove("show");
   }
  
});
    

// Remove word as wordCrosser pressed
wordCrosser.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
});