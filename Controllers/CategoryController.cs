using Microsoft.AspNetCore.Mvc;

namespace Arac.Satis.UI.Controllers
{
    public class CategoryController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
