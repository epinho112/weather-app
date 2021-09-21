const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=7d129b6cce53338557e34421bcc16c9f&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connec to loaction service', undefined)
        } else if(body.error){
            callback('Unanble to find location', undefined)
        } else{
            temperature = body.current.temperature
            feelsLike = body.current.feelslike
            description = body.current.weather_descriptions[6]
            humitity = body.current.feelslike
            callback(undefined, `${description} It is currently ${temperature}, but it feels like ${feelsLike} with humitity of ${humitity}%`)
        }
    })
}

module.exports = forecast