const renderCountries = (arr) => {
    //console.log(arr);

    let returnHtml = "";
    for (const country of arr) {
        console.log(country.name.official);
        returnHtml += `<div>${country.name.official}</div>`
    }

    return returnHtml
}

const renderFlags = (arr) => {
    let returnHtml = "";
    for (const flag of arr) {
        returnHtml += `<img src="${flag.flags.png}">`
    }
    return returnHtml
}

async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();

    //console.log(countryArr);
    //renderCountries(countryArr);
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryNames">${renderCountries(countryArr)}</div>`);
    document.getElementById("root").insertAdjacentHTML("beforeend", `<div id="countryFlags">${renderFlags(countryArr)}</div>`);
}

window.addEventListener("load", loadEvent);