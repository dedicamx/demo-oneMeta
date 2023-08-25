// token from POST
const token = '1d6aff6fcbe67279d9ecc39694768a9b';

// add language to the select element
select = document.getElementById('inputGroupSelect01');
const data = {"translation":{"af":{"name":"Afrikaans","nativeName":"Afrikaans","dir":"ltr"},"am":{"name":"Amharic","nativeName":"አማርኛ","dir":"ltr"},"ar":{"name":"Arabic","nativeName":"العربية","dir":"rtl"},"as":{"name":"Assamese","nativeName":"অসমীয়া","dir":"ltr"},"az":{"name":"Azerbaijani","nativeName":"Azərbaycan","dir":"ltr"},"ba":{"name":"Bashkir","nativeName":"Bashkir","dir":"ltr"},"bg":{"name":"Bulgarian","nativeName":"Български","dir":"ltr"},"bn":{"name":"Bangla","nativeName":"বাংলা","dir":"ltr"},"bo":{"name":"Tibetan","nativeName":"བོད་སྐད་","dir":"ltr"},"bs":{"name":"Bosnian","nativeName":"Bosnian","dir":"ltr"},"ca":{"name":"Catalan","nativeName":"Català","dir":"ltr"},"cs":{"name":"Czech","nativeName":"Čeština","dir":"ltr"},"cy":{"name":"Welsh","nativeName":"Cymraeg","dir":"ltr"},"da":{"name":"Danish","nativeName":"Dansk","dir":"ltr"},"de":{"name":"German","nativeName":"Deutsch","dir":"ltr"},"dv":{"name":"Divehi","nativeName":"ދިވެހިބަސް","dir":"rtl"},"el":{"name":"Greek","nativeName":"Ελληνικά","dir":"ltr"},"en":{"name":"English","nativeName":"English","dir":"ltr"},"es":{"name":"Spanish","nativeName":"Español","dir":"ltr"},"et":{"name":"Estonian","nativeName":"Eesti","dir":"ltr"},"eu":{"name":"Basque","nativeName":"Euskara","dir":"ltr"},"fa":{"name":"Persian","nativeName":"فارسی","dir":"rtl"},"fi":{"name":"Finnish","nativeName":"Suomi","dir":"ltr"},"fil":{"name":"Filipino","nativeName":"Filipino","dir":"ltr"},"fj":{"name":"Fijian","nativeName":"Na Vosa Vakaviti","dir":"ltr"},"fo":{"name":"Faroese","nativeName":"Føroyskt","dir":"ltr"},"fr":{"name":"French","nativeName":"Français","dir":"ltr"},"fr-CA":{"name":"French (Canada)","nativeName":"Français (Canada)","dir":"ltr"},"ga":{"name":"Irish","nativeName":"Gaeilge","dir":"ltr"},"gl":{"name":"Galician","nativeName":"Galego","dir":"ltr"},"gu":{"name":"Gujarati","nativeName":"ગુજરાતી","dir":"ltr"},"he":{"name":"Hebrew","nativeName":"עברית","dir":"rtl"},"hi":{"name":"Hindi","nativeName":"हिन्दी","dir":"ltr"},"hr":{"name":"Croatian","nativeName":"Hrvatski","dir":"ltr"},"hsb":{"name":"Upper Sorbian","nativeName":"Hornjoserbšćina","dir":"ltr"},"ht":{"name":"Haitian Creole","nativeName":"Haitian Creole","dir":"ltr"},"hu":{"name":"Hungarian","nativeName":"Magyar","dir":"ltr"},"hy":{"name":"Armenian","nativeName":"Հայերեն","dir":"ltr"},"id":{"name":"Indonesian","nativeName":"Indonesia","dir":"ltr"},"ikt":{"name":"Inuinnaqtun","nativeName":"Inuinnaqtun","dir":"ltr"},"is":{"name":"Icelandic","nativeName":"Íslenska","dir":"ltr"},"it":{"name":"Italian","nativeName":"Italiano","dir":"ltr"},"iu":{"name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ","dir":"ltr"},"iu-Latn":{"name":"Inuktitut (Latin)","nativeName":"Inuktitut (Latin)","dir":"ltr"},"ja":{"name":"Japanese","nativeName":"日本語","dir":"ltr"},"ka":{"name":"Georgian","nativeName":"ქართული","dir":"ltr"},"kk":{"name":"Kazakh","nativeName":"Қазақ Тілі","dir":"ltr"},"km":{"name":"Khmer","nativeName":"ខ្មែរ","dir":"ltr"},"kmr":{"name":"Kurdish (Northern)","nativeName":"Kurdî (Bakur)","dir":"ltr"},"kn":{"name":"Kannada","nativeName":"ಕನ್ನಡ","dir":"ltr"},"ko":{"name":"Korean","nativeName":"한국어","dir":"ltr"},"ku":{"name":"Kurdish (Central)","nativeName":"Kurdî (Navîn)","dir":"rtl"},"ky":{"name":"Kyrgyz","nativeName":"Кыргызча","dir":"ltr"},"lo":{"name":"Lao","nativeName":"ລາວ","dir":"ltr"},"lt":{"name":"Lithuanian","nativeName":"Lietuvių","dir":"ltr"},"lv":{"name":"Latvian","nativeName":"Latviešu","dir":"ltr"},"lzh":{"name":"Chinese (Literary)","nativeName":"中文 (文言文)","dir":"ltr"},"mg":{"name":"Malagasy","nativeName":"Malagasy","dir":"ltr"},"mi":{"name":"Māori","nativeName":"Te Reo Māori","dir":"ltr"},"mk":{"name":"Macedonian","nativeName":"Македонски","dir":"ltr"},"ml":{"name":"Malayalam","nativeName":"മലയാളം","dir":"ltr"},"mn-Cyrl":{"name":"Mongolian (Cyrillic)","nativeName":"Mongolian (Cyrillic)","dir":"ltr"},"mn-Mong":{"name":"Mongolian (Traditional)","nativeName":"ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ","dir":"ltr"},"mr":{"name":"Marathi","nativeName":"मराठी","dir":"ltr"},"ms":{"name":"Malay","nativeName":"Melayu","dir":"ltr"},"mt":{"name":"Maltese","nativeName":"Malti","dir":"ltr"},"mww":{"name":"Hmong Daw","nativeName":"Hmong Daw","dir":"ltr"},"my":{"name":"Myanmar (Burmese)","nativeName":"မြန်မာ","dir":"ltr"},"nb":{"name":"Norwegian","nativeName":"Norsk Bokmål","dir":"ltr"},"ne":{"name":"Nepali","nativeName":"नेपाली","dir":"ltr"},"nl":{"name":"Dutch","nativeName":"Nederlands","dir":"ltr"},"or":{"name":"Odia","nativeName":"ଓଡ଼ିଆ","dir":"ltr"},"otq":{"name":"Querétaro Otomi","nativeName":"Hñähñu","dir":"ltr"},"pa":{"name":"Punjabi","nativeName":"ਪੰਜਾਬੀ","dir":"ltr"},"pl":{"name":"Polish","nativeName":"Polski","dir":"ltr"},"prs":{"name":"Dari","nativeName":"دری","dir":"rtl"},"ps":{"name":"Pashto","nativeName":"پښتو","dir":"rtl"},"pt":{"name":"Portuguese (Brazil)","nativeName":"Português (Brasil)","dir":"ltr"},"pt-PT":{"name":"Portuguese (Portugal)","nativeName":"Português (Portugal)","dir":"ltr"},"ro":{"name":"Romanian","nativeName":"Română","dir":"ltr"},"ru":{"name":"Russian","nativeName":"Русский","dir":"ltr"},"sk":{"name":"Slovak","nativeName":"Slovenčina","dir":"ltr"},"sl":{"name":"Slovenian","nativeName":"Slovenščina","dir":"ltr"},"sm":{"name":"Samoan","nativeName":"Gagana Sāmoa","dir":"ltr"},"so":{"name":"Somali","nativeName":"Soomaali","dir":"ltr"},"sq":{"name":"Albanian","nativeName":"Shqip","dir":"ltr"},"sr-Cyrl":{"name":"Serbian (Cyrillic)","nativeName":"Српски (ћирилица)","dir":"ltr"},"sr-Latn":{"name":"Serbian (Latin)","nativeName":"Srpski (latinica)","dir":"ltr"},"sv":{"name":"Swedish","nativeName":"Svenska","dir":"ltr"},"sw":{"name":"Swahili","nativeName":"Kiswahili","dir":"ltr"},"ta":{"name":"Tamil","nativeName":"தமிழ்","dir":"ltr"},"te":{"name":"Telugu","nativeName":"తెలుగు","dir":"ltr"},"th":{"name":"Thai","nativeName":"ไทย","dir":"ltr"},"ti":{"name":"Tigrinya","nativeName":"ትግር","dir":"ltr"},"tk":{"name":"Turkmen","nativeName":"Türkmen Dili","dir":"ltr"},"tlh-Latn":{"name":"Klingon (Latin)","nativeName":"Klingon (Latin)","dir":"ltr"},"tlh-Piqd":{"name":"Klingon (pIqaD)","nativeName":"Klingon (pIqaD)","dir":"ltr"},"to":{"name":"Tongan","nativeName":"Lea Fakatonga","dir":"ltr"},"tr":{"name":"Turkish","nativeName":"Türkçe","dir":"ltr"},"tt":{"name":"Tatar","nativeName":"Татар","dir":"ltr"},"ty":{"name":"Tahitian","nativeName":"Reo Tahiti","dir":"ltr"},"ug":{"name":"Uyghur","nativeName":"ئۇيغۇرچە","dir":"rtl"},"uk":{"name":"Ukrainian","nativeName":"Українська","dir":"ltr"},"ur":{"name":"Urdu","nativeName":"اردو","dir":"rtl"},"uz":{"name":"Uzbek (Latin)","nativeName":"Uzbek (Latin)","dir":"ltr"},"vi":{"name":"Vietnamese","nativeName":"Tiếng Việt","dir":"ltr"},"yua":{"name":"Yucatec Maya","nativeName":"Yucatec Maya","dir":"ltr"},"yue":{"name":"Cantonese (Traditional)","nativeName":"粵語 (繁體)","dir":"ltr"},"zh-Hans":{"name":"Chinese Simplified","nativeName":"中文 (简体)","dir":"ltr"},"zh-Hant":{"name":"Chinese Traditional","nativeName":"繁體中文 (繁體)","dir":"ltr"},"zu":{"name":"Zulu","nativeName":"Isi-Zulu","dir":"ltr"}}};
Object.keys(data.translation).forEach((key) => {
    var opt = document.createElement('option');
    opt.value = key;
    opt.innerHTML = data.translation[key].name;
    select.appendChild(opt);
});

const wsUri = 'ws://localhost:3001/ws/' + token;

// create the websocket
//let conn = new WebSocket(wsUri);

// connect to websocket
/*conn.onopen = function () {
    console.log('Connected to websocket');
    document.getElementById('text').disabled = '';
}

// get the response from the websocket
conn.onmessage = function (e) {
    if (voiceFlag) {
        if (e.data.length <= 32) { return }
        console.log('start voice');
        const uint8StringArray = event.data.replace('[', '').replace(']', '').split(',');
        dataVoice = [new Uint8Array(uint8StringArray)];
        const blob = new Blob(dataVoice, { type: "audio/webm;codecs=opus" });
        audio.src = window.URL.createObjectURL(blob);
        audio.play();
    } else {
        const dataToInsert = `<li class="in">
                                <div class="chat-img" onclick="tts('${data.translation[select.value].name}', '${e.data}')" >
                                    <img alt="Avtar" src="https://bootdey.com/img/Content/avatar/avatar1.png" >
                                </div>
                                <div class="chat-body">
                                    <div class="chat-message">
                                        <h5>OneMeta Bot > ${data.translation[select.value].name}</h5>
                                        <p>${e.data}</p>
                                    </div>
                                </div>
                            </li>`;
        document.getElementById("chat-list").insertAdjacentHTML('beforeend', dataToInsert);
    }
}
*/
document.getElementById('text').disabled = '';

// PRUEBA SEBASTIÁN
/*
async function query(data) {
    const response = await fetch(
    "https://www.stack-inference.com/run_deployed_flow?flow_id=64de7f7a62c4b7361a2a8387&org=6b94fc9a-4f50-41e9-9abd-8e5278ee6876",
    {
        headers: {'Authorization':
         'Bearer 3e1e0174-e20d-4cbd-9c0a-d2aaedf9fcb8',
         'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify(data),
    }
    );
    const result = await response.json();
    return result;
}
*/

// PRUEBA DAYANNA
async function query(data) {
    document.getElementById("text").value ? loadingGif(data) : errorFunction();
    const response = await fetch(
    "https://www.stack-inference.com/run_deployed_flow?flow_id=64e129bad97081da614b9e7d&org=bf58ceee-e9bc-4f8b-9675-d4a90250141d",
    {
        headers: {'Authorization':
         'Bearer e465342b-5731-4e66-829b-223a86d5ce3b',
         'Content-Type': 'application/json'
    },
        method: "POST",
        body: JSON.stringify(data),
    }
    );
    modalInstance.close()
    const result = await response.json();
    return result;
}

function send() {
/*    voiceFlag = false;
    const textToTranslate = document.getElementById('text').value;
    const language = document.getElementById('inputGroupSelect01').value;
    const dataToSend = `{
        "text": "${textToTranslate}",
        "languageTo": "${language}"
    }`;
    conn.send(dataToSend);*/

    const text = document.getElementById('text').value;
    console.log("Sending...");

    // SEB
    /*
    query({"in-0": text, "in-1": `Positive, negative, neutral`}).then((response) => {
        console.log(JSON.stringify(response));
    });
    */

    // DAYANNA
    query({"in-0": `Read this text and do a summary, do a sentiment analysis and give me 3 tweets and 1 blog post entry.`, "indoc-1": text}).then((response) => {
        splitContent(JSON.stringify(response))
        console.log(JSON.stringify(response));
    });
}

document.getElementById('btn').addEventListener('click', send);

let voiceFlag = false;
let intervalId;

function tts(name, text) {
    voiceFlag = true;
    const code = list_of_voices.find((r) => r.name.toLowerCase().includes(name.toLowerCase()));
    const data_to_send = `{
        "text": "${text}",
        "voiceTo": "${code.code}"
    }`;
    conn.send(data_to_send);
}






function getMic() {

    let sampleRate = 16000;
    let bitsPerSample = 16;
    let channelCount = 1;

    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
        let context = new AudioContext({ sampleRate });
        let source = context.createMediaStreamSource(stream);
        let processor = context.createScriptProcessor(4096, 1, 1);

        let samples = [];
        processor.onaudioprocess = event => {
            let input = event.inputBuffer.getChannelData(0);
            for (let i = 0; i < input.length; i++) {
            let sample = Math.round(input[i] * 0x7FFF);
            samples.push(sample);
            }
        };
        
        source.connect(processor);
        processor.connect(context.destination);

        let wsUri = "wss://verbumapi.onemeta.ai:3001/ws/" + token;
        let socket = new WebSocket(wsUri);
        socket.binaryType = 'arraybuffer';
        
        socket.onopen = () => {
            const data_to_send = `{
                "speechLanguage": "es-AR"
            }`;
        socket.send(data_to_send);

        let chunkSize = sampleRate * channelCount * bitsPerSample / 8;
        intervalId = setInterval(() => {
            if (samples.length >= chunkSize) {
                let chunk = samples.splice(0, chunkSize);

                // Encode chunk as a little-endian, 16-bit, signed integer array
                let buffer = new ArrayBuffer(chunk.length * 2);
                let view = new DataView(buffer);
                for (let i = 0; i < chunk.length; i++) {
                view.setInt16(i * 2, chunk[i], true /* little endian */);
                }

                let data = new Uint8Array(buffer);
                console.log("Data before sending: ", data);
                socket.send(buffer);
            }
        }, 20);

        socket.onmessage = event => {
            // Get data after receiving from Rust WebSocket
            document.getElementById('text').value = event.data;
            var ul = document.getElementById("list");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(event.data));
                ul.appendChild(li);
            };

        };

         // Stop sending audio data and close the WebSocket after 10 seconds
        setTimeout(() => {
            clearInterval(intervalId);
            socket.close();
            processor.disconnect();
            source.disconnect();
            context.close();
            }, 10000);
    });
}













// full list of voices 
let list_of_voices=[{code:"af-ZA",name:"Afrikaans (South Africa)",voice:"af-ZA-AdriNeural (Female)af-ZA-WillemNeural (Male)"},{code:"am-ET",name:"Amharic (Ethiopia)",voice:"am-ET-AmehaNeural (Male)am-ET-MekdesNeural (Female)"},{code:"ar-AE",name:"Arabic (United Arab Emirates)",voice:"ar-AE-FatimaNeural4,5,6 (Female)ar-AE-HamdanNeural4,5,6 (Male)"},{code:"ar-BH",name:"Arabic (Bahrain)",voice:"ar-BH-AliNeural4,5,6 (Male)ar-BH-LailaNeural4,5,6 (Female)"},{code:"ar-DZ",name:"Arabic (Algeria)",voice:"ar-DZ-AminaNeural4,5,6 (Female)ar-DZ-IsmaelNeural4,5,6 (Male)"},{code:"ar-EG",name:"Arabic (Egypt)",voice:"ar-EG-SalmaNeural4,5,6 (Female)ar-EG-ShakirNeural4,5,6 (Male)"},{code:"ar-IQ",name:"Arabic (Iraq)",voice:"ar-IQ-BasselNeural4,5,6 (Male)ar-IQ-RanaNeural4,5,6 (Female)"},{code:"ar-JO",name:"Arabic (Jordan)",voice:"ar-JO-SanaNeural4,5,6 (Female)ar-JO-TaimNeural4,5,6 (Male)"},{code:"ar-KW",name:"Arabic (Kuwait)",voice:"ar-KW-FahedNeural4,5,6 (Male)ar-KW-NouraNeural4,5,6 (Female)"},{code:"ar-LB",name:"Arabic (Lebanon)",voice:"ar-LB-LaylaNeural4,5,6 (Female)ar-LB-RamiNeural4,5,6 (Male)"},{code:"ar-LY",name:"Arabic (Libya)",voice:"ar-LY-ImanNeural4,5,6 (Female)ar-LY-OmarNeural4,5,6 (Male)"},{code:"ar-MA",name:"Arabic (Morocco)",voice:"ar-MA-JamalNeural4,5,6 (Male)ar-MA-MounaNeural4,5,6 (Female)"},{code:"ar-OM",name:"Arabic (Oman)",voice:"ar-OM-AbdullahNeural4,5,6 (Male)ar-OM-AyshaNeural4,5,6 (Female)"},{code:"ar-QA",name:"Arabic (Qatar)",voice:"ar-QA-AmalNeural4,5,6 (Female)ar-QA-MoazNeural4,5,6 (Male)"},{code:"ar-SA",name:"Arabic (Saudi Arabia)",voice:"ar-SA-HamedNeural4,5,6 (Male)ar-SA-ZariyahNeural4,5,6 (Female)"},{code:"ar-SY",name:"Arabic (Syria)",voice:"ar-SY-AmanyNeural4,5,6 (Female)ar-SY-LaithNeural4,5,6 (Male)"},{code:"ar-TN",name:"Arabic (Tunisia)",voice:"ar-TN-HediNeural4,5,6 (Male)ar-TN-ReemNeural4,5,6 (Female)"},{code:"ar-YE",name:"Arabic (Yemen)",voice:"ar-YE-MaryamNeural4,5,6 (Female)ar-YE-SalehNeural4,5,6 (Male)"},{code:"az-AZ",name:"Azerbaijani (Latin, Azerbaijan)",voice:"az-AZ-BabekNeural (Male)az-AZ-BanuNeural (Female)"},{code:"bg-BG",name:"Bulgarian (Bulgaria)",voice:"bg-BG-BorislavNeural4,5,6 (Male)bg-BG-KalinaNeural4,5,6 (Female)"},{code:"bn-BD",name:"Bangla (Bangladesh)",voice:"bn-BD-NabanitaNeural (Female)bn-BD-PradeepNeural (Male)"},{code:"bn-IN",name:"Bengali (India)",voice:"bn-IN-BashkarNeural (Male)bn-IN-TanishaaNeural (Female)"},{code:"bs-BA",name:"Bosnian (Bosnia and Herzegovina)",voice:"bs-BA-GoranNeural (Male)bs-BA-VesnaNeural (Female)"},{code:"ca-ES",name:"Catalan (Spain)",voice:"ca-ES-AlbaNeural4,5,6 (Female)ca-ES-EnricNeural4,5,6 (Male)ca-ES-JoanaNeural4,5,6 (Female)"},{code:"cs-CZ",name:"Czech (Czechia)",voice:"cs-CZ-AntoninNeural4,5,6 (Male)cs-CZ-VlastaNeural4,5,6 (Female)"},{code:"cy-GB",name:"Welsh (United Kingdom)",voice:"cy-GB-AledNeural (Male)cy-GB-NiaNeural (Female)"},{code:"da-DK",name:"Danish (Denmark)",voice:"da-DK-ChristelNeural4,5,6 (Female)da-DK-JeppeNeural4,5,6 (Male)"},{code:"de-AT",name:"German (Austria)",voice:"de-AT-IngridNeural4,5,6 (Female)de-AT-JonasNeural4,5,6 (Male)"},{code:"de-CH",name:"German (Switzerland)",voice:"de-CH-JanNeural4,5,6 (Male)de-CH-LeniNeural4,5,6 (Female)"},{code:"de-DE",name:"German (Germany)",voice:"de-DE-AmalaNeural4,5,6 (Female)de-DE-BerndNeural4,5,6 (Male)de-DE-ChristophNeural4,5,6 (Male)de-DE-ConradNeural4,5,6 (Male)de-DE-ElkeNeural4,5,6 (Female)de-DE-GiselaNeural4,5,6,8 (Female)de-DE-KasperNeural4,5,6 (Male)de-DE-KatjaNeural4,5,6 (Female)de-DE-KillianNeural4,5,6 (Male)de-DE-KlarissaNeural4,5,6 (Female)de-DE-KlausNeural4,5,6 (Male)de-DE-LouisaNeural4,5,6 (Female)de-DE-MajaNeural4,5,6 (Female)de-DE-RalfNeural4,5,6 (Male)de-DE-TanjaNeural4,5,6 (Female)"},{code:"el-GR",name:"Greek (Greece)",voice:"el-GR-AthinaNeural4,5,6 (Female)el-GR-NestorasNeural4,5,6 (Male)"},{code:"en-AU",name:"English (Australia)",voice:"en-AU-AnnetteNeural1,4,5,6 (Female)en-AU-CarlyNeural1,4,5,6 (Female)en-AU-DarrenNeural1,4,5,6 (Male)en-AU-DuncanNeural1,4,5,6 (Male)en-AU-ElsieNeural1,4,5,6 (Female)en-AU-FreyaNeural1,4,5,6 (Female)en-AU-JoanneNeural1,4,5,6 (Female)en-AU-KenNeural1,4,5,6 (Male)en-AU-KimNeural1,4,5,6 (Female)en-AU-NatashaNeural4,5,6 (Female)en-AU-NeilNeural1,4,5,6 (Male)en-AU-TimNeural1,4,5,6 (Male)en-AU-TinaNeural1,4,5,6 (Female)en-AU-WilliamNeural4,5,6 (Male)"},{code:"en-CA",name:"English (Canada)",voice:"en-CA-ClaraNeural4,5,6 (Female)en-CA-LiamNeural4,5,6 (Male)"},{code:"en-GB",name:"English (United Kingdom)",voice:"en-GB-AbbiNeural4,5,6 (Female)en-GB-AlfieNeural4,5,6 (Male)en-GB-BellaNeural4,5,6 (Female)en-GB-ElliotNeural4,5,6 (Male)en-GB-EthanNeural4,5,6 (Male)en-GB-HollieNeural4,5,6 (Female)en-GB-LibbyNeural4,5,6 (Female)en-GB-MaisieNeural4,5,6,8 (Female)en-GB-NoahNeural4,5,6 (Male)en-GB-OliverNeural4,5,6 (Male)en-GB-OliviaNeural4,5,6 (Female)en-GB-RyanNeural1,2,4,5,6 (Male)en-GB-SoniaNeural1,2,4,5,6 (Female)en-GB-ThomasNeural4,5,6 (Male)"},{code:"en-HK",name:"English (Hong Kong SAR)",voice:"en-HK-SamNeural4,5,6 (Male)en-HK-YanNeural4,5,6 (Female)"},{code:"en-IE",name:"English (Ireland)",voice:"en-IE-ConnorNeural4,5,6 (Male)en-IE-EmilyNeural4,5,6 (Female)"},{code:"en-IN",name:"English (India)",voice:"en-IN-NeerjaNeural4,5,6 (Female)en-IN-PrabhatNeural4,5,6 (Male)"},{code:"en-KE",name:"English (Kenya)",voice:"en-KE-AsiliaNeural4,5,6 (Female)en-KE-ChilembaNeural4,5,6 (Male)"},{code:"en-NG",name:"English (Nigeria)",voice:"en-NG-AbeoNeural4,5,6 (Male)en-NG-EzinneNeural4,5,6 (Female)"},{code:"en-NZ",name:"English (New Zealand)",voice:"en-NZ-MitchellNeural4,5,6 (Male)en-NZ-MollyNeural4,5,6 (Female)"},{code:"en-PH",name:"English (Philippines)",voice:"en-PH-JamesNeural4,5,6 (Male)en-PH-RosaNeural4,5,6 (Female)"},{code:"en-SG",name:"English (Singapore)",voice:"en-SG-LunaNeural4,5,6 (Female)en-SG-WayneNeural4,5,6 (Male)"},{code:"en-TZ",name:"English (Tanzania)",voice:"en-TZ-ElimuNeural4,5,6 (Male)en-TZ-ImaniNeural4,5,6 (Female)"},{code:"en-US",name:"English (United States)",voice:"en-US-AIGenerate1Neural1,4,5,6 (Male)en-US-AIGenerate2Neural1,4,5,6 (Female)en-US-AmberNeural4,5,6 (Female)en-US-AnaNeural4,5,6,8 (Female)en-US-AriaNeural2,4,5,6 (Female)en-US-AshleyNeural4,5,6 (Female)en-US-BrandonNeural4,5,6 (Male)en-US-ChristopherNeural4,5,6 (Male)en-US-CoraNeural4,5,6 (Female)en-US-DavisNeural2,4,5,6 (Male)en-US-ElizabethNeural4,5,6 (Female)en-US-EricNeural4,5,6 (Male)en-US-GuyNeural2,4,5,6 (Male)en-US-JacobNeural4,5,6 (Male)en-US-JaneNeural2,4,5,6 (Female)en-US-JasonNeural2,4,5,6 (Male)en-US-JennyMultilingualNeural4,5,6,7 (Female)en-US-JennyNeural2,4,5,6 (Female)en-US-MichelleNeural4,5,6 (Female)en-US-MonicaNeural4,5,6 (Female)en-US-NancyNeural2,4,5,6 (Female)en-US-RogerNeural1,4,5,6 (Male)en-US-SaraNeural2,4,5,6 (Female)en-US-SteffanNeural1,4,5,6 (Male)en-US-TonyNeural2,4,5,6 (Male)"},{code:"en-ZA",name:"English (South Africa)",voice:"en-ZA-LeahNeural4,5,6 (Female)en-ZA-LukeNeural4,5,6 (Male)"},{code:"es-AR",name:"Spanish (Argentina)",voice:"es-AR-ElenaNeural4,5,6 (Female)es-AR-TomasNeural4,5,6 (Male)"},{code:"es-BO",name:"Spanish (Bolivia)",voice:"es-BO-MarceloNeural4,5,6 (Male)es-BO-SofiaNeural4,5,6 (Female)"},{code:"es-CL",name:"Spanish (Chile)",voice:"es-CL-CatalinaNeural4,5,6 (Female)es-CL-LorenzoNeural4,5,6 (Male)"},{code:"es-CO",name:"Spanish (Colombia)",voice:"es-CO-GonzaloNeural4,5,6 (Male)es-CO-SalomeNeural4,5,6 (Female)"},{code:"es-CR",name:"Spanish (Costa Rica)",voice:"es-CR-JuanNeural4,5,6 (Male)es-CR-MariaNeural4,5,6 (Female)"},{code:"es-CU",name:"Spanish (Cuba)",voice:"es-CU-BelkysNeural4,5,6 (Female)es-CU-ManuelNeural4,5,6 (Male)"},{code:"es-DO",name:"Spanish (Dominican Republic)",voice:"es-DO-EmilioNeural4,5,6 (Male)es-DO-RamonaNeural4,5,6 (Female)"},{code:"es-EC",name:"Spanish (Ecuador)",voice:"es-EC-AndreaNeural4,5,6 (Female)es-EC-LuisNeural4,5,6 (Male)"},{code:"es-ES",name:"Spanish (Spain)",voice:"es-ES-AbrilNeural1,4,5,6 (Female)es-ES-AlvaroNeural1,4,5,6 (Male)es-ES-ArnauNeural1,4,5,6 (Male)es-ES-DarioNeural1,4,5,6 (Male)es-ES-EliasNeural1,4,5,6 (Male)es-ES-ElviraNeural4,5,6 (Female)es-ES-EstrellaNeural1,4,5,6 (Female)es-ES-IreneNeural1,4,5,6 (Female)es-ES-LaiaNeural1,4,5,6 (Female)es-ES-LiaNeural1,4,5,6 (Female)es-ES-NilNeural1,4,5,6 (Male)es-ES-SaulNeural1,4,5,6 (Male)es-ES-TeoNeural1,4,5,6 (Male)es-ES-TrianaNeural1,4,5,6 (Female)es-ES-VeraNeural1,4,5,6 (Female)"},{code:"es-GQ",name:"Spanish (Equatorial Guinea)",voice:"es-GQ-JavierNeural4,5,6 (Male)es-GQ-TeresaNeural4,5,6 (Female)"},{code:"es-GT",name:"Spanish (Guatemala)",voice:"es-GT-AndresNeural4,5,6 (Male)es-GT-MartaNeural4,5,6 (Female)"},{code:"es-HN",name:"Spanish (Honduras)",voice:"es-HN-CarlosNeural4,5,6 (Male)es-HN-KarlaNeural4,5,6 (Female)"},{code:"es-MX",name:"Spanish (Mexico)",voice:"es-MX-BeatrizNeural4,5,6 (Female)es-MX-CandelaNeural4,5,6 (Female)es-MX-CarlotaNeural4,5,6 (Female)es-MX-CecilioNeural4,5,6 (Male)es-MX-DaliaNeural4,5,6 (Female)es-MX-GerardoNeural4,5,6 (Male)es-MX-JorgeNeural1,2,4,5,6 (Male)es-MX-LarissaNeural4,5,6 (Female)es-MX-LibertoNeural4,5,6 (Male)es-MX-LucianoNeural4,5,6 (Male)es-MX-MarinaNeural4,5,6 (Female)es-MX-NuriaNeural4,5,6 (Female)es-MX-PelayoNeural4,5,6 (Male)es-MX-RenataNeural4,5,6 (Female)es-MX-YagoNeural4,5,6 (Male)"},{code:"es-NI",name:"Spanish (Nicaragua)",voice:"es-NI-FedericoNeural4,5,6 (Male)es-NI-YolandaNeural4,5,6 (Female)"},{code:"es-PA",name:"Spanish (Panama)",voice:"es-PA-MargaritaNeural4,5,6 (Female)es-PA-RobertoNeural4,5,6 (Male)"},{code:"es-PE",name:"Spanish (Peru)",voice:"es-PE-AlexNeural4,5,6 (Male)es-PE-CamilaNeural4,5,6 (Female)"},{code:"es-PR",name:"Spanish (Puerto Rico)",voice:"es-PR-KarinaNeural4,5,6 (Female)es-PR-VictorNeural4,5,6 (Male)"},{code:"es-PY",name:"Spanish (Paraguay)",voice:"es-PY-MarioNeural4,5,6 (Male)es-PY-TaniaNeural4,5,6 (Female)"},{code:"es-SV",name:"Spanish (El Salvador)",voice:"es-SV-LorenaNeural4,5,6 (Female)es-SV-RodrigoNeural4,5,6 (Male)"},{code:"es-US",name:"Spanish (United States)",voice:"es-US-AlonsoNeural4,5,6 (Male)es-US-PalomaNeural4,5,6 (Female)"},{code:"es-UY",name:"Spanish (Uruguay)",voice:"es-UY-MateoNeural4,5,6 (Male)es-UY-ValentinaNeural4,5,6 (Female)"},{code:"es-VE",name:"Spanish (Venezuela)",voice:"es-VE-PaolaNeural4,5,6 (Female)es-VE-SebastianNeural4,5,6 (Male)"},{code:"et-EE",name:"Estonian (Estonia)",voice:"et-EE-AnuNeural (Female)et-EE-KertNeural (Male)"},{code:"eu-ES",name:"Basque",voice:"eu-ES-AinhoaNeural (Female)eu-ES-AnderNeural (Male)"},{code:"fa-IR",name:"Persian (Iran)",voice:"fa-IR-DilaraNeural (Female)fa-IR-FaridNeural (Male)"},{code:"fi-FI",name:"Finnish (Finland)",voice:"fi-FI-HarriNeural4,5,6 (Male)fi-FI-NooraNeural4,5,6 (Female)fi-FI-SelmaNeural4,5,6 (Female)"},{code:"fil-PH",name:"Filipino (Philippines)",voice:"fil-PH-AngeloNeural (Male)fil-PH-BlessicaNeural (Female)"},{code:"fr-BE",name:"French (Belgium)",voice:"fr-BE-CharlineNeural4,5,6 (Female)fr-BE-GerardNeural4,5,6 (Male)"},{code:"fr-CA",name:"French (Canada)",voice:"fr-CA-AntoineNeural4,5,6 (Male)fr-CA-JeanNeural4,5,6 (Male)fr-CA-SylvieNeural4,5,6 (Female)"},{code:"fr-CH",name:"French (Switzerland)",voice:"fr-CH-ArianeNeural4,5,6 (Female)fr-CH-FabriceNeural4,5,6 (Male)"},{code:"fr-FR",name:"French (France)",voice:"fr-FR-AlainNeural4,5,6 (Male)fr-FR-BrigitteNeural4,5,6 (Female)fr-FR-CelesteNeural4,5,6 (Female)fr-FR-ClaudeNeural4,5,6 (Male)fr-FR-CoralieNeural4,5,6 (Female)fr-FR-DeniseNeural1,2,4,5,6 (Female)fr-FR-EloiseNeural4,5,6,8 (Female)fr-FR-HenriNeural1,2,4,5,6 (Male)fr-FR-JacquelineNeural4,5,6 (Female)fr-FR-JeromeNeural4,5,6 (Male)fr-FR-JosephineNeural4,5,6 (Female)fr-FR-MauriceNeural4,5,6 (Male)fr-FR-YvesNeural4,5,6 (Male)fr-FR-YvetteNeural4,5,6 (Female)"},{code:"ga-IE",name:"Irish (Ireland)",voice:"ga-IE-ColmNeural (Male)ga-IE-OrlaNeural (Female)"},{code:"gl-ES",name:"Galician",voice:"gl-ES-RoiNeural (Male)gl-ES-SabelaNeural (Female)"},{code:"gu-IN",name:"Gujarati (India)",voice:"gu-IN-DhwaniNeural4,5,6 (Female)gu-IN-NiranjanNeural4,5,6 (Male)"},{code:"he-IL",name:"Hebrew (Israel)",voice:"he-IL-AvriNeural4,5,6 (Male)he-IL-HilaNeural4,5,6 (Female)"},{code:"hi-IN",name:"Hindi (India)",voice:"hi-IN-MadhurNeural4,5,6 (Male)hi-IN-SwaraNeural4,5,6 (Female)"},{code:"hr-HR",name:"Croatian (Croatia)",voice:"hr-HR-GabrijelaNeural4,5,6 (Female)hr-HR-SreckoNeural4,5,6 (Male)"},{code:"hu-HU",name:"Hungarian (Hungary)",voice:"hu-HU-NoemiNeural4,5,6 (Female)hu-HU-TamasNeural4,5,6 (Male)"},{code:"hy-AM",name:"Armenian (Armenia)",voice:"hy-AM-AnahitNeural (Female)hy-AM-HaykNeural (Male)"},{code:"id-ID",name:"Indonesian (Indonesia)",voice:"id-ID-ArdiNeural4,5,6 (Male)id-ID-GadisNeural4,5,6 (Female)"},{code:"is-IS",name:"Icelandic (Iceland)",voice:"is-IS-GudrunNeural (Female)is-IS-GunnarNeural (Male)"},{code:"it-IT",name:"Italian (Italy)",voice:"it-IT-BenignoNeural4,5,6 (Male)it-IT-CalimeroNeural4,5,6 (Male)it-IT-CataldoNeural4,5,6 (Male)it-IT-DiegoNeural1,4,5,6 (Male)it-IT-ElsaNeural4,5,6 (Female)it-IT-FabiolaNeural4,5,6 (Female)it-IT-FiammaNeural4,5,6 (Female)it-IT-GianniNeural4,5,6 (Male)it-IT-ImeldaNeural4,5,6 (Female)it-IT-IrmaNeural4,5,6 (Female)it-IT-IsabellaNeural1,2,4,5,6 (Female)it-IT-LisandroNeural4,5,6 (Male)it-IT-PalmiraNeural4,5,6 (Female)it-IT-PierinaNeural4,5,6 (Female)it-IT-RinaldoNeural4,5,6 (Male)"},{code:"ja-JP",name:"Japanese (Japan)",voice:"ja-JP-AoiNeural1,4,5,6 (Female)ja-JP-DaichiNeural1,4,5,6 (Male)ja-JP-KeitaNeural4,5,6 (Male)ja-JP-MayuNeural1,4,5,6 (Female)ja-JP-NanamiNeural2,4,5,6 (Female)ja-JP-NaokiNeural1,4,5,6 (Male)ja-JP-ShioriNeural1,4,5,6 (Female)"},{code:"jv-ID",name:"Javanese (Latin, Indonesia)",voice:"jv-ID-DimasNeural (Male)jv-ID-SitiNeural (Female)"},{code:"ka-GE",name:"Georgian (Georgia)",voice:"ka-GE-EkaNeural (Female)ka-GE-GiorgiNeural (Male)"},{code:"kk-KZ",name:"Kazakh (Kazakhstan)",voice:"kk-KZ-AigulNeural (Female)kk-KZ-DauletNeural (Male)"},{code:"km-KH",name:"Khmer (Cambodia)",voice:"km-KH-PisethNeural (Male)km-KH-SreymomNeural (Female)"},{code:"kn-IN",name:"Kannada (India)",voice:"kn-IN-GaganNeural (Male)kn-IN-SapnaNeural (Female)"},{code:"ko-KR",name:"Korean (Korea)",voice:"ko-KR-BongJinNeural1,4,5,6 (Male)ko-KR-GookMinNeural1,4,5,6 (Male)ko-KR-InJoonNeural4,5,6 (Male)ko-KR-JiMinNeural1,4,5,6 (Female)ko-KR-SeoHyeonNeural1,4,5,6 (Female)ko-KR-SoonBokNeural1,4,5,6 (Female)ko-KR-SunHiNeural4,5,6 (Female)ko-KR-YuJinNeural1,4,5,6 (Female)"},{code:"lo-LA",name:"Lao (Laos)",voice:"lo-LA-ChanthavongNeural (Male)lo-LA-KeomanyNeural (Female)"},{code:"lt-LT",name:"Lithuanian (Lithuania)",voice:"lt-LT-LeonasNeural (Male)lt-LT-OnaNeural (Female)"},{code:"lv-LV",name:"Latvian (Latvia)",voice:"lv-LV-EveritaNeural (Female)lv-LV-NilsNeural (Male)"},{code:"mk-MK",name:"Macedonian (North Macedonia)",voice:"mk-MK-AleksandarNeural (Male)mk-MK-MarijaNeural (Female)"},{code:"ml-IN",name:"Malayalam (India)",voice:"ml-IN-MidhunNeural (Male)ml-IN-SobhanaNeural (Female)"},{code:"mn-MN",name:"Mongolian (Mongolia)",voice:"mn-MN-BataaNeural (Male)mn-MN-YesuiNeural (Female)"},{code:"mr-IN",name:"Marathi (India)",voice:"mr-IN-AarohiNeural4,5,6 (Female)mr-IN-ManoharNeural4,5,6 (Male)"},{code:"ms-MY",name:"Malay (Malaysia)",voice:"ms-MY-OsmanNeural4,5,6 (Male)ms-MY-YasminNeural4,5,6 (Female)"},{code:"mt-MT",name:"Maltese (Malta)",voice:"mt-MT-GraceNeural (Female)mt-MT-JosephNeural (Male)"},{code:"my-MM",name:"Myanmar (Burmese)",voice:"my-MM-NilarNeural (Female)my-MM-ThihaNeural (Male)"},{code:"nb-NO",name:"Norwegian (Bokm\xe5l, Norway)",voice:"nb-NO-FinnNeural4,5,6 (Male)nb-NO-IselinNeural4,5,6 (Female)nb-NO-PernilleNeural4,5,6 (Female)"},{code:"ne-NP",name:"Nepali (Nepal)",voice:"ne-NP-HemkalaNeural (Female)ne-NP-SagarNeural (Male)"},{code:"nl-BE",name:"Dutch (Belgium)",voice:"nl-BE-ArnaudNeural4,5,6 (Male)nl-BE-DenaNeural4,5,6 (Female)"},{code:"nl-NL",name:"Dutch (Netherlands)",voice:"nl-NL-ColetteNeural4,5,6 (Female)nl-NL-FennaNeural1,4,5,6 (Female)nl-NL-MaartenNeural1,4,5,6 (Male)"},{code:"pl-PL",name:"Polish (Poland)",voice:"pl-PL-AgnieszkaNeural4,5,6 (Female)pl-PL-MarekNeural4,5,6 (Male)pl-PL-ZofiaNeural4,5,6 (Female)"},{code:"ps-AF",name:"Pashto (Afghanistan)",voice:"ps-AF-GulNawazNeural (Male)ps-AF-LatifaNeural (Female)"},{code:"pt-BR",name:"Portuguese (Brazil)",voice:"pt-BR-AntonioNeural4,5,6 (Male)pt-BR-BrendaNeural4,5,6 (Female)pt-BR-DonatoNeural4,5,6 (Male)pt-BR-ElzaNeural4,5,6 (Female)pt-BR-FabioNeural4,5,6 (Male)pt-BR-FranciscaNeural2,4,5,6 (Female)pt-BR-GiovannaNeural4,5,6 (Female)pt-BR-HumbertoNeural4,5,6 (Male)pt-BR-JulioNeural4,5,6 (Male)pt-BR-LeilaNeural4,5,6 (Female)pt-BR-LeticiaNeural4,5,6 (Female)pt-BR-ManuelaNeural4,5,6 (Female)pt-BR-NicolauNeural4,5,6 (Male)pt-BR-ValerioNeural4,5,6 (Male)pt-BR-YaraNeural4,5,6 (Female)"},{code:"pt-PT",name:"Portuguese (Portugal)",voice:"pt-PT-DuarteNeural4,5,6 (Male)pt-PT-FernandaNeural4,5,6 (Female)pt-PT-RaquelNeural4,5,6 (Female)"},{code:"ro-RO",name:"Romanian (Romania)",voice:"ro-RO-AlinaNeural4,5,6 (Female)ro-RO-EmilNeural4,5,6 (Male)"},{code:"ru-RU",name:"Russian (Russia)",voice:"ru-RU-DariyaNeural4,5,6 (Female)ru-RU-DmitryNeural4,5,6 (Male)ru-RU-SvetlanaNeural4,5,6 (Female)"},{code:"si-LK",name:"Sinhala (Sri Lanka)",voice:"si-LK-SameeraNeural (Male)si-LK-ThiliniNeural (Female)"},{code:"sk-SK",name:"Slovak (Slovakia)",voice:"sk-SK-LukasNeural4,5,6 (Male)sk-SK-ViktoriaNeural4,5,6 (Female)"},{code:"sl-SI",name:"Slovenian (Slovenia)",voice:"sl-SI-PetraNeural4,5,6 (Female)sl-SI-RokNeural4,5,6 (Male)"},{code:"so-SO",name:"Somali (Somalia)",voice:"so-SO-MuuseNeural (Male)so-SO-UbaxNeural (Female)"},{code:"sq-AL",name:"Albanian (Albania)",voice:"sq-AL-AnilaNeural (Female)sq-AL-IlirNeural (Male)"},{code:"sr-RS",name:"Serbian (Cyrillic, Serbia)",voice:"sr-RS-NicholasNeural (Male)sr-RS-SophieNeural (Female)"},{code:"su-ID",name:"Sundanese (Indonesia)",voice:"su-ID-JajangNeural (Male)su-ID-TutiNeural (Female)"},{code:"sv-SE",name:"Swedish (Sweden)",voice:"sv-SE-HilleviNeural4,5,6 (Female)sv-SE-MattiasNeural4,5,6 (Male)sv-SE-SofieNeural4,5,6 (Female)"},{code:"sw-KE",name:"Swahili (Kenya)",voice:"sw-KE-RafikiNeural (Male)sw-KE-ZuriNeural (Female)"},{code:"sw-TZ",name:"Swahili (Tanzania)",voice:"sw-TZ-DaudiNeural4,5,6 (Male)sw-TZ-RehemaNeural4,5,6 (Female)"},{code:"ta-IN",name:"Tamil (India)",voice:"ta-IN-PallaviNeural4,5,6 (Female)ta-IN-ValluvarNeural4,5,6 (Male)"},{code:"ta-LK",name:"Tamil (Sri Lanka)",voice:"ta-LK-KumarNeural4,5,6 (Male)ta-LK-SaranyaNeural4,5,6 (Female)"},{code:"ta-MY",name:"Tamil (Malaysia)",voice:"ta-MY-KaniNeural4,5,6 (Female)ta-MY-SuryaNeural4,5,6 (Male)"},{code:"ta-SG",name:"Tamil (Singapore)",voice:"ta-SG-AnbuNeural4,5,6 (Male)ta-SG-VenbaNeural4,5,6 (Female)"},{code:"te-IN",name:"Telugu (India)",voice:"te-IN-MohanNeural4,5,6 (Male)te-IN-ShrutiNeural4,5,6 (Female)"},{code:"th-TH",name:"Thai (Thailand)",voice:"th-TH-AcharaNeural4,5,6 (Female)th-TH-NiwatNeural4,5,6 (Male)th-TH-PremwadeeNeural4,5,6 (Female)"},{code:"tr-TR",name:"Turkish (Turkey)",voice:"tr-TR-AhmetNeural4,5,6 (Male)tr-TR-EmelNeural4,5,6 (Female)"},{code:"uk-UA",name:"Ukrainian (Ukraine)",voice:"uk-UA-OstapNeural4,5,6 (Male)uk-UA-PolinaNeural4,5,6 (Female)"},{code:"ur-IN",name:"Urdu (India)",voice:"ur-IN-GulNeural4,5,6 (Female)ur-IN-SalmanNeural4,5,6 (Male)"},{code:"ur-PK",name:"Urdu (Pakistan)",voice:"ur-PK-AsadNeural4,5,6 (Male)ur-PK-UzmaNeural4,5,6 (Female)"},{code:"uz-UZ",name:"Uzbek (Latin, Uzbekistan)",voice:"uz-UZ-MadinaNeural (Female)uz-UZ-SardorNeural (Male)"},{code:"vi-VN",name:"Vietnamese (Vietnam)",voice:"vi-VN-HoaiMyNeural4,5,6 (Female)vi-VN-NamMinhNeural4,5,6 (Male)"},{code:"wuu-CN",name:"Chinese (Wu, Simplified)",voice:"wuu-CN-XiaotongNeural1 (Female)wuu-CN-YunzheNeural1 (Male)"},{code:"yue-CN",name:"Chinese (Cantonese, Simplified)",voice:"yue-CN-XiaoMinNeural1 (Female)yue-CN-YunSongNeural1 (Male)"},{code:"zh-CN",name:"Chinese (Mandarin, Simplified)",voice:"zh-CN-XiaochenNeural4,5,6 (Female)zh-CN-XiaohanNeural2,4,5,6 (Female)zh-CN-XiaomengNeural1,2,4,5,6 (Female)zh-CN-XiaomoNeural2,3,4,5,6 (Female)zh-CN-XiaoqiuNeural4,5,6 (Female)zh-CN-XiaoruiNeural2,4,5,6 (Female)zh-CN-XiaoshuangNeural2,4,5,6,8 (Female)zh-CN-XiaoxiaoNeural2,4,5,6 (Female)zh-CN-XiaoxuanNeural2,3,4,5,6 (Female)zh-CN-XiaoyanNeural4,5,6 (Female)zh-CN-XiaoyiNeural1,2,4,5,6 (Female)zh-CN-XiaoyouNeural4,5,6,8 (Female)zh-CN-XiaozhenNeural1,2,4,5,6 (Female)zh-CN-YunfengNeural1,2,4,5,6 (Male)zh-CN-YunhaoNeural1,2,4,5,6 (Male)zh-CN-YunjianNeural1,2,4,5,6 (Male)zh-CN-YunxiaNeural1,2,4,5,6 (Male)zh-CN-YunxiNeural2,3,4,5,6 (Male)zh-CN-YunyangNeural2,4,5,6 (Male)zh-CN-YunyeNeural2,3,4,5,6 (Male)zh-CN-YunzeNeural1,2,3,4,5,6 (Male)"},{code:"zh-CN-henan",name:"Chinese (Zhongyuan Mandarin Henan, Simplified)",voice:"zh-CN-henan-YundengNeural1 (Male)"},{code:"zh-CN-liaoning",name:"Chinese (Northeastern Mandarin, Simplified)",voice:"zh-CN-liaoning-XiaobeiNeural1 (Female)"},{code:"zh-CN-shaanxi",name:"Chinese (Zhongyuan Mandarin Shaanxi, Simplified)",voice:"zh-CN-shaanxi-XiaoniNeural1 (Female)"},{code:"zh-CN-shandong",name:"Chinese (Jilu Mandarin, Simplified)",voice:"zh-CN-shandong-YunxiangNeural1 (Male)"},{code:"zh-CN-sichuan",name:"Chinese (Southwestern Mandarin, Simplified)",voice:"zh-CN-sichuan-YunxiNeural1 (Male)"},{code:"zh-HK",name:"Chinese (Cantonese, Traditional)",voice:"zh-HK-HiuGaaiNeural4,5,6 (Female)zh-HK-HiuMaanNeural4,5,6 (Female)zh-HK-WanLungNeural1,4,5,6 (Male)"},{code:"zh-TW",name:"Chinese (Taiwanese Mandarin, Traditional)",voice:"zh-TW-HsiaoChenNeural4,5,6 (Female)zh-TW-HsiaoYuNeural4,5,6 (Female)zh-TW-YunJheNeural4,5,6 (Male)"},{code:"zu-ZA",name:"Zulu (South Africa)",voice:"zu-ZA-ThandoNeural (Female)zu-ZA-ThembaNeural (Male)"}];