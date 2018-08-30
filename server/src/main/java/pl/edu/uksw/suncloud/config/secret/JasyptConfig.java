package pl.edu.uksw.suncloud.config.secret;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:secret.properties")
public class JasyptConfig {
}
