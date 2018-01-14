package pl.edu.uksw.suncloud.weather;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MeasurementRepoTest {
    @Autowired
    MeasurementRepo measurementRepo;

    @Test
    public void testInsertAndDelete() {
        Measurement measurement = new Measurement();
        Date date = new Date();
        measurement.setDateTime(date);

        measurementRepo.save(measurement);

        Measurement dbMeasurement = measurementRepo.findById(measurement.getId());
        assertNotNull(dbMeasurement);
        assertEquals(dbMeasurement.getDateTime().getSeconds(), measurement.getDateTime().getSeconds());

        measurementRepo.delete(dbMeasurement);
        dbMeasurement = measurementRepo.findByDateTime(date);
        assertNull(dbMeasurement);
    }
}