console.log("HI!");

const getCountryByName = async (countryName) => {
    // Fetch array
    const countryArray = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {return response.json()})
    
    // Find the country based on search
    let country;
    for (let i = 0; i < countryArray.length; i++) {
        const commonName = countryArray[i].name.common;
        const flagImage = countryArray[i].flags.png;

        const countryDiv = document.createElement("div");
        const countryFlag = document.createElement("img");
        const countryHead = document.createElement("h2");

        countryDiv.class = commonName;
        countryFlag.src = flagImage;
        countryHead.textContent = commonName;
        
        countryDiv.appendChild(countryFlag);
        countryDiv.appendChild(countryHead);
        document.querySelector(".countries").appendChild(countryDiv);
        
    }
    console.log(country);

};

getCountryByName("united");