package pl.edu.uksw.suncloud.weather;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Arduino")
@Data
public class Measurement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "TIME", nullable = false)
    private Date dateTime;

    @Column(name = "TEMP_POW")
    private String temperature;

    @Column(name = "WILG_POW")
    private String airHumidity;

    @Column(name = "POZIOM_OPADOW")
    private Integer rainfallLevel;

    @Column(name = "WILG_GLEBY")
    private Integer soilHumidity;
}
