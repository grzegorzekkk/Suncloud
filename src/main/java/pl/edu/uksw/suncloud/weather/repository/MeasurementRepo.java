package pl.edu.uksw.suncloud.weather.repository;

import org.springframework.data.repository.CrudRepository;
import pl.edu.uksw.suncloud.weather.domain.Measurement;

import java.util.Date;
import java.util.Optional;

public interface MeasurementRepo extends CrudRepository<Measurement, Long> {
    Optional<Measurement> findById(Long id);
    Optional<Measurement> findTop1ByOrderByDateTimeDesc();
    Optional<Measurement> findByDateTime(Date date);

    <S extends Measurement> S save(S measurement);

    void deleteById(Long id);
}
