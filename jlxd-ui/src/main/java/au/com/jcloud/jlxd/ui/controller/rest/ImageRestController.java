package au.com.jcloud.jlxd.ui.controller.rest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import au.com.jcloud.jlxd.ui.search.AjaxResponseBody;
import au.com.jcloud.jlxd.ui.search.SearchCriteria;
import au.com.jcloud.lxd.model.Image;
import au.com.jcloud.lxd.service.ICachingLxdService;

@RequestMapping("/image")
@RestController
public class ImageRestController extends BaseRestController<Image> {

	private static final Logger LOG = Logger.getLogger(ImageRestController.class);

	@PostMapping("/search")
	public ResponseEntity<?> getSearchResultViaAjax(HttpServletRequest request,
			@Valid @RequestBody SearchCriteria search, Errors errors) {

		AjaxResponseBody<Image> result = new AjaxResponseBody<>();

		//If error, just return a 400 bad request, along with the error message
		if (errors.hasErrors()) {
			StringBuffer errorString = new StringBuffer();
			for (ObjectError error : errors.getAllErrors()) {
				if (errorString.length() > 0) {
					errorString.append(",");
				}
				errorString.append(error.getDefaultMessage());
			}
			result.setMsg(errorString.toString());
			return ResponseEntity.badRequest().body(result);
		}

		try {
			Map<String, Image> images = loadEntities(getLxdService(request));

			String searchTerm = search.getSearchTerm();
			if (images.isEmpty()) {
				throw new Exception("no images found!");
			}
			else if (StringUtils.isEmpty(searchTerm)) {
				result.setMsg("Showing all images!");
				result.setResult(images.values());
			}
			else {
				if (images.containsKey(searchTerm)) {
					result.setResult(new ArrayList<Image>());
					result.getResult().add(images.get(searchTerm));
					result.setMsg("success. found image: " + images.get(searchTerm));
				}
				else {
					throw new Exception("No image found with name: " + searchTerm);
				}
			}
		} catch (Exception e) {
			LOG.error(e, e);
			result.setMsg(e.getMessage());
		}

		return ResponseEntity.ok(result);
	}

	@Override
	public Map<String, Image> loadEntities(ICachingLxdService lxdService) throws IOException, InterruptedException {
		Map<String, Image> images = new HashMap<>();
		if (isDefaultServerAndWindowsOs(lxdService)) {
			Image image = new Image();
			image.setFingerprint("123");
			image.setArchitecture("x64");
			image.setDescription("ubuntu");
			images.put(image.getFingerprint(), image);

			Image image2 = new Image();
			image2.setFingerprint("456");
			image2.setArchitecture("x32");
			image2.setDescription("windows");
			images.put(image2.getFingerprint(), image2);
		}
		else {
			images = getLxdService().getImageMap();
		}
		return images;
	}
}
