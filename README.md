### Rapport

Inlämningsuppgift 2

Väderrapport

Projektet börjar med att registrera sig på webbtjänsten Openweather för att kunna använda deras API som i sin tur ger väderdata. Efter registrering erhålls en API nyckel som krävs för att kunna använda API:et. Denna nyckel sparas i en variabel i skriptet. Sedan skrivs HTML, där det läggs till en h1 och en h2 som tilldelas id:n, #temperature och #location, detta för att sedan kunna manipulera dessa med hjälp av JavaScript-metoden document.getElementByID i skriptet.

Förs ut i skriptet görs en async funktion (getData) för att hämta data genom en begäran till URL (Openweathers API). Funktionen körs med en await fetch och läser av serverns respons och med hjälp av en if sats skrivs responsen ut i consolen. Datan som kommer tillbaka som en json sträng blir omvandlad till ett JavaScript objekt genom .json(). Sedan returneras datan. Denna funktion skapas för att undvika att skriva ut samma kod flera gånger om.
DRY - Don't repeat yourself.

Följande så används en funktion dekorerad med async med hjälp av fetch och en URL för att hämta ut data om staden (Halmstad). Detta görs med hjälp av föregående Funktion (getData) som har egenskaper som behövs för att hämta data. Genom datan som skickas tillbaka om staden plockas stadens koordinater ut och sparas i två separata variabler; lon och lat, lon för longitud och lat för latitud. Dessa variabler används sedan i den andra URL begäran som görs för att få ut data om stadens väder.

I den andra URL begäran så används också den första funktionen (getData) tillsammans med variablerna lon och lat i URL:en för att hämta data om vädret för just koordinaterna från lon och lat. När vädret har hämtats och genom getData funktionen blivit omvandlad till ett JavaScript objekt kan data från objektet plockas ut. Detta görs genom att deklarera en variabel som är lika med funktionens namn följt av main.temp. Samma sak görs för hämta ut vilket land staden befinner sig i genom; funktionNamn.sys.country. Namnet på landet har dock endast förkortats vilket gör att förkortningen också sparas i en variabel som gör den till en sträng, i detta fall - “Sverige”. För att spara information om molnighet så hämtas datan från objektets egenskaper genom att skriva funktionNamn.weather.description.

Slutligen, så behöver vi komma åt och manipulera vår HTML (DOM). Detta görs genom att använda document.getElementByID, som är en JavaScript metod för att komma åt och manipulera HTML element. För att nå dessa element görs variabler följt av document.getElementByID samt HTML elementets egenskaper som vi tidigare skapat och gett id:na #temperature och #location. Sedan används variabelnamnet.innerHTML för att manipulera och få ut vår data på DOMen och webbläsaren. Och för att göra allt möjligt så behöver funktionen bli kallad på.

Min GitHub: https://github.com/ronnysabo/weatherApp
