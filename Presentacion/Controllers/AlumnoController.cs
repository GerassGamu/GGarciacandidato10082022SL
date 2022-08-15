using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Presentacion.Controllers
{
    public class AlumnoController : Controller
    {
        // GET: /Alumno/
        [HttpGet]
        public ActionResult GetAll()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Form()
        {
            return View(new Negocio.Alumno());
        }

        [HttpGet]
        public JsonResult Get()
        {
            Negocio.Result result = Negocio.Alumno.GetAllEF();

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult GetById(int IdAlumno)
        {
            Negocio.Result result = Negocio.Alumno.GetByIdEF(IdAlumno);

            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Add(Negocio.Alumno alumno)
        {
            Negocio.Result result = Negocio.Alumno.AddEF(alumno);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult Update(Negocio.Alumno alumno)
        {
            Negocio.Result result = Negocio.Alumno.UpdateEF(alumno);
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult Delete(Negocio.Alumno alumno)
        {
            Negocio.Result result = Negocio.Alumno.DeleteEF(alumno);

            return Json(result, JsonRequestBehavior.AllowGet);
        }



        [HttpGet]
        public ActionResult GetAll1()
        {
            Negocio.Result result = Negocio.Alumno.GetAllEF();
            Negocio.Alumno alumno = new Negocio.Alumno();

            if (result.Correct)
            {
                alumno.Alumnos = result.Objects;
            }


            return View(alumno);
        }
    }
}
