# PostgreDB
To see output, have to access Database which password: samrat

or create Database which

  user: 'postgres',
  
  password: 'samrat',
  
  host: 'localhost',
  
  database: 'city',
  
  Table name: 'weather',
  
  Value: city=dhaka, high=27, low=18;
  
  port: 5432,
  
  Then run in port 3000



CREATE TABLE weather(

   city:character(50),
   
   high:integer(20),
   
   low: integer(20)
   
);

INSERT INTO weather (city, high, low)

VALUES ("dhaka", 27, 18);

