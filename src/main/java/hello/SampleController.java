package hello;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;

/**
 * @author neil
 * @since 2016/2/1
 */
@Controller
@EnableAutoConfiguration
public class SampleController {

    public static void main(String[] args) throws Exception {
        SpringApplication.run(SampleController.class, args);
    }
}
