DROP TABLE IF EXISTS weather_measurement;
CREATE TABLE weather_measurement (
   id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
   measure_time TIMESTAMP NOT NULL,
   air_temp DOUBLE NOT NULL,
   air_humidity SMALLINT,
   rainfall_level SMALLINT,
   soil_humidity SMALLINT,
);