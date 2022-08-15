using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Presentacion.Controllers
{
    public class MateriaController : Controller
    {
        // GET: /Materia/
        [HttpGet]
        public ActionResult GetAll()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Form()
        {
            return View(new Negocio.Materia());
        }

        [HttpGet]
        public JsonResult Get()
        {
            Negocio.Result result = Negocio.Materia.GetAllEF();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetById(int IdMateria)
        {
            Negocio.Result result = Negocio.Materia.GetByIdEF(IdMateria);

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Add(Negocio.Materia materia)
        {
            char[] ValidacionNombreMateria = System.Configuration.ConfigurationManager.AppSettings["ValidacionNombreMateria"].ToCharArray();
            // &<>/
            if (materia.Nombre != null)
            {
                foreach (char caracter in ValidacionNombreMateria)
                {


                    materia.Nombre = materia.Nombre.Replace(caracter.ToString(), "");

                }
                if (materia.Nombre != "")
                {
                    Negocio.Result result = Negocio.Materia.AddEF(materia);
                    return Json(result, JsonRequestBehavior.AllowGet);

                }
                else
                {
                    return Json(null, JsonRequestBehavior.AllowGet);

                }
            }
            else
            {
                return Json(null, JsonRequestBehavior.AllowGet);
            }



        }


        [HttpPost]
        public JsonResult Update(Negocio.Materia materia)
        {
            Negocio.Result result = Negocio.Materia.UpdateEF(materia);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Delete(Negocio.Materia materia)
        {
            Negocio.Result result = Negocio.Materia.DeleteEF(materia);

            return Json(result, JsonRequestBehavior.AllowGet);
        
    }
}
}