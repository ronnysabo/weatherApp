const apiKey = "fa3a565a0030936783d125789dbb5613";
const city = "Halmstad";

// funktion som fetchar data, kollar respons och sedan omvandlar json sträng till javasript objekt..
// denna används sedan som referens i min weatherApp

let getData = async (url) => {
  let response = await fetch(url);
  console.log("Fetch returned " + response.status);
  if (response.ok) {
    console.log("Fetch gick bra");
  }
  let data = await response.json();
  return data;
};
