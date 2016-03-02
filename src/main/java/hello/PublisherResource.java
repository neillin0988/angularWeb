package hello;

import hello.vo.Publisher;
import hello.vo.PublisherForm;
import hello.vo.SampleForm;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author neil
 * @since 2016/2/1
 */
@Controller
public class PublisherResource {

    @RequestMapping(value="/publisher/find", method={RequestMethod.POST})
    public @ResponseBody
    PublisherForm find(@RequestBody PublisherForm form) {
        PublisherForm result = new PublisherForm();
        result.publishers = new ArrayList<Publisher>();
        result.publishers.add(new Publisher("1", "東森新聞雲"));
        result.publishers.add(new Publisher("2", "經理人"));

        return result;
    }

}
