var dataAccueil;
fetch('json/accueil.json')
  .then(response => response.json())
  .then(data => {
    dataAccueil = data
    console.log(dataAccueil);
})

/*var dataPageDetail;
fetch('json/pagedetail.json')
  .then(response => response.json())
  .then(data => {
    dataPageDetail = data
    console.log(dataPageDetail);
}) */