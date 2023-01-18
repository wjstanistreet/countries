console.log("HI!");

const getCountryByName = async (countryName) => {
    // Fetch array
    const countryArray = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then((response) => {return response.json()})
    
    // Find the country based on search
    for (let i = 0; i < countryArray.length; i++) {
        createCountryCard(countryArray[i]);
    }

};

const createCountryCard = (country) => {
    //Extract country information from the array
    const commonName = country.name.common;
    const flagImage = country.flags.png;
    const population = country.population;

    //Create elements for country card
    const countryDiv = document.createElement("div");
    const countryFlag = document.createElement("img");
    const countryHead = document.createElement("h2");
    const countryDetails = document.createElement("ul");
    const countryPopulation = document.createElement("li");
    
    //Assign values
    countryDiv.class = commonName;
    countryFlag.src = flagImage;
    countryHead.textContent = commonName;
    countryPopulation.textContent = "Population: " + population;

    //Append elements and final HTML
    countryDetails.appendChild(countryPopulation);
    countryDiv.appendChild(countryFlag);
    countryDiv.appendChild(countryHead);
    countryDiv.appendChild(countryDetails);
    document.querySelector(".countries").appendChild(countryDiv);
};

const getAllCountries = async () => {
    const countries = await fetch("https://restcountries.com/v3.1/all")
    .then((response) => {return response.json()})

    for (let i = 0; i < countries.length; i++) {
        createCountryCard(countries[i]);
    }
};

// getCountryByName("hungary");

getAllCountries();