package hello;

import hello.vo.SampleForm;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author neil
 * @since 2016/2/1
 */
@Controller
@SpringBootApplication
public class SampleController {

    @RequestMapping(value="/sample/ajax", method=RequestMethod.POST)
    public @ResponseBody
    Map<String, Object> sampleAjax(@RequestBody SampleForm form) {
        Map<String, Object> result = new HashMap<String, Object>();

        result.put("msg", "Hello " + form.getName() + "!");

        return result;
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(SampleController.class, args);
    }
}
