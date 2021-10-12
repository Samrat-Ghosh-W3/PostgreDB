const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'city',
  password: 'samrat',
  port: 5432,
})

const getWeathers = (request, response) => {
    pool.query('SELECT * FROM weather', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getWeathersByCity = (request, response) => {
    const city = request.params.city
   
  
    pool.query('SELECT * FROM weather WHERE city = $1', [city], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  module.exports = {
    getWeathers,
    getWeathersByCity,
    
  }