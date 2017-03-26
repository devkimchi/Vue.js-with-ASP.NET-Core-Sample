using System;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.ProjectOxford.Vision;
using Microsoft.ProjectOxford.Vision.Contract;

using Newtonsoft.Json;

namespace VueJsTsOcrAspNetCoreSample.Controllers
{
    [Route("api")]
    public class ApiController : Controller
    {
        [Route("hello")]
        [HttpGet]
        public IActionResult Hello()
        {
            var msg = new { Message = "Hello World" };
            return this.Ok(msg);
        }

        [Route("ocr")]
        [HttpPost]
        public async Task<IActionResult> GetApiText(IFormFile file)
        {
            if (file == null)
            {
                file = this.Request.Form.Files.FirstOrDefault();
            }

            OcrResults result;
            string imagePath;
            using (var stream = file.OpenReadStream())
            {
                var client = new VisionServiceClient("[SUBSCRIPTION_KEY_GOES_HERE]");
                try
                {
                    result = await client.RecognizeTextAsync(stream, languageCode: "en", detectOrientation: true).ConfigureAwait(false);

                    using (var ms = new MemoryStream())
                    {
                        await file.CopyToAsync(ms).ConfigureAwait(false);
                        var base64 = Convert.ToBase64String(ms.ToArray());
                        var value = $"data:{file.ContentType};base64,{base64}";

                        imagePath = value;
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    throw;
                }
            }

            return Json(new { Result = result, ImagePath = imagePath }, new JsonSerializerSettings() { Formatting = Formatting.Indented });
        }
    }
}
