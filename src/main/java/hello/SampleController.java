package hello;

import hello.vo.SampleForm;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * @author neil
 * @since 2016/2/1
 */
@Controller
@EnableAutoConfiguration
public class SampleController {

    @RequestMapping(value="/sampleAjax", method=RequestMethod.POST)
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
