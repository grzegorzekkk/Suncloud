package pl.edu.uksw.suncloud.index;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.edu.uksw.suncloud.weather.MeasurementRepo;

@Controller
public class IndexController {

    @Autowired
    MeasurementRepo measurementRepo;

    @RequestMapping(value = "/")
    public String index(Model model) {
        model.addAttribute("new_measurement", measurementRepo.findTop1ByOrderByDateTimeDesc());
        return "index";
    }
}
