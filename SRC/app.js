const express = require('express')
const path = require('path')
const app = express()
const cors = require("cors")
const hbs = require('hbs')
const geocode = require('./GEO/geoCode')
const forecast = require('./GEO/forecast')

//define path for express  
const pathWeb =path.join(__dirname,'../publics')
const pathViews =path.join(__dirname,'../template/views')
const partialsViews =path.join(__dirname,'../template/partials')
console.log('Commit')
//handlebars Engine and views location
app.set('view engine', 'hbs')
app.set('views',pathViews)
hbs.registerPartials(partialsViews)
//setup static directory
app.use(express.static(pathWeb))
app.use(cors())




app.get('',(req ,res)=>{
  res.render('index')
 
})

app.get('/weather',(req ,res)=>{
  if (!req.query.address) {
    return res.send({
        error: 'You must provide an address!'
    })
}
  geocode(req.query.address,(error,{latitude,longtitude,location}={})=>{
        
      if (error) {
        return res.send({ error })
    }
   forecast(latitude,longtitude,(error,foreCdata)=>{
      if (error) {
        return res.send({ error })
    }

    res.send({
      forecast:foreCdata,
      location,
      addres : req.query.address
    })

   })
   
  })

})

app.get('/about',(req ,res)=>{
   res.render('about')
  
})

app.get('*',(req,res) =>{
 res.send('Erorr 404 :)')

})


app.listen(3000,() =>{
console.log('Server is Up')
})
