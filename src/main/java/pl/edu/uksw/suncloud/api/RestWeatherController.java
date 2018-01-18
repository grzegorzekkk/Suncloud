package pl.edu.uksw.suncloud.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.uksw.suncloud.weather.domain.Measurement;
import pl.edu.uksw.suncloud.weather.repository.MeasurementRepo;

@RestController
@RequestMapping("/api/weather/measurement")
public class RestWeatherController {

    @Autowired
    private MeasurementRepo measurementRepo;

    @RequestMapping("/latest")
    Measurement readLatestMeasurement() {
        return this.measurementRepo.findTop1ByOrderByDateTimeDesc();
    }

    @RequestMapping("/all")
    Iterable<Measurement> readAllMeasurements() {
        return this.measurementRepo.findAll();
    }

    @RequestMapping("/id/{id}")
    Measurement readMeasurementById(@PathVariable int id){
        return this.measurementRepo.findById(id);
    }
}
