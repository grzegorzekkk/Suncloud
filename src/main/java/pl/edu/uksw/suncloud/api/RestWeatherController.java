package pl.edu.uksw.suncloud.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.uksw.suncloud.weather.domain.Measurement;
import pl.edu.uksw.suncloud.weather.repository.MeasurementRepo;

@RestController
@RequestMapping("/api")
public class RestWeatherController {

    @Autowired
    private MeasurementRepo measurementRepo;

    @RequestMapping("/measurement_latest")
    Measurement readLatestMeasurement() {
        return this.measurementRepo.findTop1ByOrderByDateTimeDesc();
    }

    @RequestMapping("/measurement_all")
    Iterable<Measurement> readAllMeasurements() {
        return this.measurementRepo.findAll();
    }

}
