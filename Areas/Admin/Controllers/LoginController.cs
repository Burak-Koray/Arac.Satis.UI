using Microsoft.AspNetCore.Mvc;

namespace Arac_Satis_UI.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
