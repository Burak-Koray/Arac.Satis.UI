using Microsoft.AspNetCore.Mvc;

namespace Arac.Satis.UI.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
