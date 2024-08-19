const request = require('request')
const forecast = (latitude,longtitude , callback) => {
    const urll ='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ latitude+','+longtitude+'?unitGroup=us&key=L9MLT6B3M5JX5FNK95PX5QFNY&contentType=json'
    
    request({url : urll, json :true}, (error,response)=> {  
    //console.log(response.body.currentConditions)
    if (error) {
        callback('Unbale to Connect !',undefined)


    }else if(response.body.error){
        callback('Unbale To Found Loacation !',undefined)
    } else{
        var tempFinal = (response.body.currentConditions.temp) -32 * 1.8
        var ox = response.body.currentConditions.conditions
        var sunrise = response.body.currentConditions.sunrise
        var sunset = response.body.currentConditions.sunset
        var finalResult = 'Its currently  '+tempFinal+'  Degress out and  '+ox+' , '+' the sunrise is  '+sunrise+ ' and the sunset is  '+sunset
       callback(undefined,{
           
           // Tempreture : tempFinal,
            Tempreture : finalResult,
            

       })
        
       
    }

   
  })
}
module.exports=forecast