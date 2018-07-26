package pl.edu.uksw.suncloud.weather.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "weather_measurement")
@Data
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "measure_time", nullable = false)
    private Date dateTime;

    @Column(name = "air_temp")
    private Double temperature;

    @Column(name = "air_humidity")
    private Short airHumidity;

    @Column(name = "rainfall_level")
    private Short rainfallLevel;

    @Column(name = "soil_humidity")
    private Short soilHumidity;
}
