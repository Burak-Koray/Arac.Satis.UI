using Microsoft.AspNetCore.Mvc;

namespace Arac_Satis_UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class CommentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
