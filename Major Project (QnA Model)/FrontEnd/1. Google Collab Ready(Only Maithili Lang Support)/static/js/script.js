const subBtn = document.querySelector(".submit-btn"),
  loader_container = document.querySelector(".loader-container"),
  loader = document.querySelector(".loader"),
  fields = document.querySelectorAll(["textarea", "input"]),
  textField = document.querySelector("textarea"),
  qstField = document.querySelector('input[type*="text"]'),
  mic = document.querySelectorAll(".mic"),
  mic1 = document.querySelector(".mic1"),
  mic2 = document.querySelector(".mic2"),
  spkr = document.querySelector(".fa-volume-high"),
  ansContainer = document.querySelector(".get_answer"),
  ans = document.querySelector(".answer");

let chosenLanguage = "hi-IN";

//Loader after submiting btn
subBtn.addEventListener('click', (e) => {
  if (
    !textField.value ||
    !qstField.value ||
    (textField.value.charCodeAt() && qstField.value.charCodeAt() === 32)
  ) {
    e.preventDefault();
    return;
  }
  // e.preventDefault();
  ans.innerText="";
  if (ans.innerHTML == "") {
    // e.preventDefault();
    loader.classList.add("showLoader");
    loader.classList.remove("hideLdr");
    loader_container.classList.remove("hideLdr");
  }
})

//Page Reload, Empty Text & Question Field
document.querySelector(".reload").addEventListener('click', () => {
  window.location = window.location.href;
});
document.querySelector(".empty_txt_field").addEventListener("click", () => {
  textField.value = "";
});
document.querySelector(".empty_qst_field").addEventListener("click", () => {
  qstField.value = "";
});

// As Fileds get any character, DemoBtn get disabled and enabled if Fields get empty 
fields.forEach((field) => {
  if (field === textField || field === qstField) {
    field.addEventListener("keyup", () => {
      if (!textField.value && !qstField.value) {
        enableDemoBtn();
      } else {
        pauseDemoBtn();
      }
    });
  }

})


// Microphone Access
mic1.addEventListener('click', () => { record1(chosenLanguage) });
// For Mic1
function record1(lang) {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = lang;
  recognition.onresult = function (event) {
    let getVoice = event.results[0][0].transcript;
    textField.value = getVoice;
  };
  recognition.start();
}

mic2.addEventListener('click', () => { record2(chosenLanguage) });
//For Mic2
function record2(lang) {
  var recognition = new webkitSpeechRecognition();
  recognition.lang = lang;
  recognition.onresult = function (event) {
    let getVoice = event.results[0][0].transcript;
    qstField.value = getVoice;
  };
  recognition.start();
}



// Text to Speech
let synth = speechSynthesis;

window.onload = () => {
  if (ans.innerHTML !== "" && ans.innerHTML !== "{{answer}}") {
    ansContainer.style.display = "block";
    textToSpeech(ans.innerHTML);
  }
}
spkr.addEventListener("click", () => {
  if (ans.innerHTML !== "" && ans.innerHTML !== "{{answer}}") {
    textToSpeech(ans.innerHTML);
  }
});

const textToSpeech = (text) => {
  let utterance = new SpeechSynthesisUtterance(text);
  for (let voice of synth.getVoices()) {
    if (voice.lang === chosenLanguage)
      utterance.voice = voice;
  }
  synth.speak(utterance);
};

// Demo Content Display
const pstTxtBtn = document.querySelector(".pst_txt"),
  pstQstBtn = document.querySelector(".pst_qst"),
  demoPstBtn = document.querySelectorAll([".pst_txt", ".pst_qst"]);

const pauseDemoBtn = (demoBtn) => {
  if (demoBtn === 'demoTxtBtn') {
    pstTxtBtn.setAttribute("disabled", "");
    pstTxtBtn.style.color = "var(--disabled)";
    pstTxtBtn.style.cursor = "not-allowed";
  } else if (demoBtn === 'demoQstBtn') {
    pstQstBtn.setAttribute("disabled", "");
    pstQstBtn.style.color = "var(--disabled)";
    pstQstBtn.style.cursor = "not-allowed";
  } else {
    demoPstBtn.forEach((demBtn) => {
      demBtn.setAttribute("disabled", "");
      demBtn.style.color = "var(--disabled)";
      demBtn.style.cursor = "not-allowed";
    })
  }
}
const enableDemoBtn = () => {
  demoPstBtn.forEach((demBtn) => {
    demBtn.removeAttribute("disabled", "");
    demBtn.style.backgroundColor = "transparent";
    demBtn.style.cursor = "pointer";
  });
}


const demoContents = [
  {
    maithTxt:
      "निशांत नामक एकटा लड़का अछि। ओ हाजीपुर मे रहैत छथि। हुनका क्रिकेट खेलनाय नीक लगैत छनि। तीन टा संगी छन्हि। हिनकर मित्रक नाम पुष्पराज, चंदन आ राजकुमार अछि । सब cvrgu मे पढ़ैत छथि। पुष्पराज सबसँ शरारती लड़का अछि।",
    maithQst: "लड़का के नाम की छै?",
  },
];

pstTxtBtn.addEventListener('click', () => {
  textField.innerHTML = demoContents[0].maithTxt;
  pauseDemoBtn("demoTxtBtn");  
})
pstQstBtn.addEventListener("click", () => {
  qstField.value = demoContents[0].maithQst;
  pauseDemoBtn("demoQstBtn");
});


// Start Tutorial
const tour = document.querySelector(".tutorial"),
  next = tour.querySelector(".next"),
  prev = tour.querySelector(".prev"),
  message = tour.querySelector(".message");


let steps = ["step-1", "step-2", "step-3", "step-4"],
  step_count = 0,
  carrot_direct = ["carr_left", "carr_right"],
  carrot_toggle = true;

const tutor_mess = [
  {
    mess: "Use <b>Demo</b> to Test this Model.",
  },
  {
    mess: "Or Manually, Enter your <b>Text</b>",
  },
  {
    mess: "Enter your <b>Question</b>",
  },
  {
    mess: 'Click here to "<b>GET ANSWER</b>"',
  },
];

document.querySelector('.skip').addEventListener('click', () => {
  tour.style.display = "none";
  tour.classList.add("hide_tutorial");
})

next.addEventListener('click', () => {
  if (step_count <= 3) {

    tour.classList.remove(steps[step_count - 1]);
    letsTour(steps, carrot_direct);

    if (carrot_toggle)
      document.querySelector(".carrot").classList.remove(carrot_direct[0]);
    else
      document.querySelector(".carrot").classList.remove(carrot_direct[1]);
  } else {
    next.classList.remove("tut_btn_grad");
    prev.classList.add("tut_btn_grad");
  }
})

prev.addEventListener('click', () => {
  if (step_count > 1) {
    tour.classList.remove(steps[step_count - 1]);
    tour.classList.add(steps[step_count - 2]);
    document.querySelector(".step_label").innerHTML =
      steps[step_count - 2] + `:`;
    message.innerHTML = tutor_mess[step_count - 2].mess;
    step_count--;

    if (carrot_toggle) {
      document.querySelector(".carrot").classList.add(carrot_direct[0]);
      document.querySelector(".carrot").classList.remove(carrot_direct[1]);
      carrot_toggle = false;
    } else {
      document.querySelector(".carrot").classList.add(carrot_direct[1]);
      document.querySelector(".carrot").classList.remove(carrot_direct[0]);
      carrot_toggle = true;
    }
  } else {
    next.classList.add("tut_btn_grad");
    prev.classList.remove("tut_btn_grad");
  }
})

function letsTour(stpsArr, carrt_drct) {
  message.innerHTML = tutor_mess[step_count].mess;
  document.querySelector(".step_label").innerHTML = stpsArr[step_count] + `:`;
  tour.classList.add(stpsArr[step_count]);
  step_count++;
  if (carrot_toggle) {
    document.querySelector(".carrot").classList.add(carrt_drct[0]);
    carrot_toggle = false;
  } else {
    document.querySelector(".carrot").classList.add(carrt_drct[1]);
    carrot_toggle = true;
  }
}
letsTour(steps, carrot_direct);


//Reading File as TExt
const fileInput = document.getElementById("dockfile"),
  fileData = document.querySelector('.fileData'),
  progressContainer = document.querySelector('.progressbar-container');

document.querySelector('.file_upload_btn').addEventListener('click', (e) => {
  e.preventDefault();
  return false;
});

fileInput.addEventListener('change', (e) => {
  let files = fileInput.files;
  if (files.length == 0)
    return;

  let file = files[0],
    fileName = file.name,
    fileSize = Math.round(file.size * 0.001),
    fileFormat = fileName.split('.')[1];
  fileData.style.color = "var(--text-color)";

  switch (fileFormat) {
    case "txt":
      convertDocFileToTxt(file, fileName, fileSize);
      fileData.style.display = "block";
      progressContainer.style.display = "none";
      pauseDemoBtn();
      break;

    case "png":
      convertImgFileToText(file, fileName, fileSize);
      fileData.style.display = "none";
      progressContainer.style.display = "flex";
      pauseDemoBtn();
      break;

    default:
      console.log(fileFormat);
      fileData.innerText = "Invalid File Format";
      fileData.style.color = "red";
      fileData.style.display = "block";
      progressContainer.style.display = "none";
      break;
  }
}
);

//CONVERTING TEXTFILE(DOC) TO TEXT 
function convertDocFileToTxt(file, fileName, fileSize) {

  //Fetching Text File
  const reader = new FileReader();
  reader.readAsText(file);

  reader.addEventListener('load', (e) => {
    const fileText = reader.result;
    const fileTextLines = fileText.split(/\r\n|\n/);
    textField.value = fileTextLines.join("\n");
  });

  //If any error encounter
  reader.onerror = (e) => alert(e.target.error.name);

  //File Details Fetch
  fileData.innerText = `${fileName}, ${fileSize}KB`;

}

//CONVERTING AN IMAGE TO TEXT
function convertImgFileToText(file, fileName, fileSize) {
  //Image Details Fetch
  var imgUrl = window.URL.createObjectURL(new Blob([file], { type: 'image/jpg' }));

  const rec = new Tesseract.TesseractWorker();
  rec.recognize(file)
    .progress(function (response) {
      if (response.status == 'recognizing text') {
        console.log('hi');        
        document.querySelector('.progressbar').style.width = `${Math.floor(response.progress * 100)}%`;
        document.querySelector('.img_upld_status').innerText = `Uploading... ${Math.floor(response.progress * 100)}%`;
      }

      document.querySelector('.imageData').innerText = `${fileName}, ${fileSize}KB `;
    })
    .then(function (data) {
      textField.value = data.text;
      document.querySelector('.img_upld_status').innerText = `Uploaded 100%`;
    })
}

// LocalStorage
const storedLang = () => {
  //Checking Tutorial has done or Not
  if (!localStorage.getItem("tutorial") && window.screen.width>=1200){
    localStorage.setItem("tutorial", "done");
    tour.style.display="block";
  }
  else
    tour.classList.add("hide_tutorial");
};
storedLang();