﻿using Microsoft.AspNetCore.Mvc;

namespace Arac.Satis.UI.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
