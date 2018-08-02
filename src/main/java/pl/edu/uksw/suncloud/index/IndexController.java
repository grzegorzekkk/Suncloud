package pl.edu.uksw.suncloud.index;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.edu.uksw.suncloud.config.secret.SecretPropertiesService;
import pl.edu.uksw.suncloud.weather.repository.MeasurementRepo;

@Controller
public class IndexController {

    private static final Logger LOG = LoggerFactory.getLogger(IndexController.class);

    @Autowired
    MeasurementRepo measurementRepo;

    @Autowired
    SecretPropertiesService secretPropertiesService;

    @RequestMapping(value = "/")
    public String index(Model model) {
        model.addAttribute("msrmnt", measurementRepo.findAll());
        LOG.info("odkodowane haslo to: " + secretPropertiesService.getTestPassword());
        return "index";
    }
}
