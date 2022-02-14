var dataAccueil;
fetch('json/accueil.json')
  .then(response => response.json())
  .then(data => {
    dataAccueil = data
    console.log(dataAccueil);
})