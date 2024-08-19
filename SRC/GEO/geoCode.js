const request = require('request')
const GeoCode = (address , callback) => {
    const Url ='https://us1.locationiq.com/v1/search?key=pk.6f48dde2280996794a315a0fc7feaa37&q='+ encodeURIComponent(address) +'&format=json&'

    request({url : Url , json : true}, (error , response) =>{
        if (error) {
            callback('Unbale to Connect !',undefined)
        }else{
            callback(undefined, {
                latitude : response.body[0].lat,
                longtitude : response.body[0].lon,
                location : response.body[0].display_name
            })

        }


    })
}
module.exports=GeoCode
