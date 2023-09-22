using Microsoft.AspNetCore.Mvc;

namespace Arac.Satis.UI.Controllers
{
    public class CommentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
