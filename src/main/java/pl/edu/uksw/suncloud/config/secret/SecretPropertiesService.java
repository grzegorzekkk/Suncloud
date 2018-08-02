package pl.edu.uksw.suncloud.config.secret;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class SecretPropertiesService {

    @Value("${test.password}")
    private String testPassword;


    public String getTestPassword() {
        return testPassword;
    }

    public void setTestPassword(String testPassword) {
        this.testPassword = testPassword;
    }
}
