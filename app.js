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
        const population = countryArray[i].population;

        const countryDiv = document.createElement("div");
        const countryFlag = document.createElement("img");
        const countryHead = document.createElement("h2");
        const countryDetails = document.createElement("ul");
        const countryPopulation = document.createElement("li");
        
        countryDiv.class = commonName;
        countryFlag.src = flagImage;
        countryHead.textContent = commonName;
        countryPopulation.textContent = "Population: " + population;

        countryDetails.appendChild(countryPopulation);
        countryDiv.appendChild(countryFlag);
        countryDiv.appendChild(countryHead);
        countryDiv.appendChild(countryDetails);
        document.querySelector(".countries").appendChild(countryDiv);
        
        console.log(countryArray[i]);
    }

};

getCountryByName("hungary");