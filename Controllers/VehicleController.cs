using Microsoft.AspNetCore.Mvc;

namespace Arac.Satis.UI.Controllers
{
    public class VehicleController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
