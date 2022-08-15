﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Presentacion.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Login()
        {
            Negocio.Alumno alumno = new Negocio.Alumno();
            return View(alumno);
        }

        [HttpPost]
        public ActionResult Login(Negocio.Alumno alumnoForm)
        {

            string txtNombre = alumnoForm.Nombre;
            string txtAP = alumnoForm.ApellidoPaterno;

            Negocio.Result result = Negocio.Alumno.GetByNombreEF(txtNombre);

            if (result.Correct)
            {
                Negocio.Alumno alumno = ((Negocio.Alumno)result.Object);
                if (alumno.Nombre == txtNombre)
                {
                    return RedirectToAction("Index", "Home"); //Linea para mandar a el inicio de la aplicacion


                }
                else
                {
                    ViewBag.Message = "El Apellido Paterno no existe,intente de nuevo";
                    return PartialView("Modal");
                }
            }
            else
            {
                ViewBag.Message = "El Nombre no existe,intenta de nuevo";
                return PartialView("Modal");
            }
            }

    }
}