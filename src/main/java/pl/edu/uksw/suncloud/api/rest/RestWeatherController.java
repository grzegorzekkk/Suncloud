package pl.edu.uksw.suncloud.api.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import pl.edu.uksw.suncloud.weather.domain.Measurement;
import pl.edu.uksw.suncloud.weather.repository.MeasurementRepo;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/api/weather/measurement")
public class RestWeatherController {

    @Autowired
    private MeasurementRepo measurementRepo;

    @GetMapping("/latest")
    public ResponseEntity<Measurement> readLatestMeasurement() {
        Optional<Measurement> optionalMeasurement = measurementRepo.findTop1ByOrderByDateTimeDesc();

        return optionalMeasurement.isPresent() ? new ResponseEntity<>(optionalMeasurement.get(), HttpStatus.OK) :
                ResponseEntity.notFound().build();
    }

    @GetMapping("/all")
    public Iterable<Measurement> readAllMeasurements() {
        return measurementRepo.findAll();
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Measurement> readMeasurementById(@PathVariable Long id) {
        Optional<Measurement> optionalMeasurement = measurementRepo.findById(id);

        return optionalMeasurement.isPresent() ? new ResponseEntity<>(optionalMeasurement.get(), HttpStatus.OK) :
                ResponseEntity.notFound().build();
    }

    @PostMapping("/")
    public ResponseEntity<Measurement> addNewMeasurement(@RequestBody Measurement measurement) {
        Measurement savedMeasurement = measurementRepo.save(measurement);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("id/{id}")
                .buildAndExpand(measurement.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<Measurement> updateMeasurement(@RequestBody Measurement measurement, @PathVariable Long id) {
        Optional<Measurement> measurementToUpdate = measurementRepo.findById(id);

        if (!measurementToUpdate.isPresent()) {
            return ResponseEntity.notFound().build();
        }

        measurement.setId(id);
        measurementRepo.save(measurement);

        return ResponseEntity.noContent().build();
    }

    @Transactional
    @DeleteMapping("/id/{id}")
    public void deleteMeasurement(@PathVariable Long id) {
        measurementRepo.deleteById(id);
    }
}
