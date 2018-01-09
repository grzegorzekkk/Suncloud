package pl.edu.uksw.suncloud.weather;

import org.springframework.data.repository.CrudRepository;

import java.util.Date;

public interface MeasurementRepo extends CrudRepository<Measurement, Integer> {
    Measurement findById(Integer id);

    Measurement findByDateTime(Date date);
}
