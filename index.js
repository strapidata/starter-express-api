const express = require('express')
const app = express()
app.all('/', (req, res) => {
    
    fetch("https://open-book-house.herokuapp.com/libros/?id=999")
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log("Unable to fetch 1 -", err);
  });
    
    fetch("https://app-abonos.herokuapp.com/categorias/?id=33")
  .then((response) => {
    console.log(response);
  })
  .catch(function (error) {
    console.log("Unable to fetch 2 -", err);
  });
    
    
    
    console.log("Just got a request!")
    res.send('MCUADROS!')
})
app.listen(process.env.PORT || 3000)
