package pl.edu.uksw.suncloud.weather.repository;

import org.springframework.data.repository.CrudRepository;
import pl.edu.uksw.suncloud.weather.domain.Measurement;

import java.util.Date;

public interface MeasurementRepo extends CrudRepository<Measurement, Long> {
    Measurement findById(Long id);

    Measurement findTop1ByOrderByDateTimeDesc();
    Measurement findByDateTime(Date date);
}
