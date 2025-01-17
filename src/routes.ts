import { Router } from "express";
import {
  getMetasEmpresariales,
  getMetaEmpresarialByCodigo,
  createMetaEmpresarial,
  updateMetaEmpresarial,
  deleteMetaEmpresarial,
} from "./controllers/metasEmpresarialesController";
import {
  getMetasAlineamiento,
  getMetaAlineamientoByCodigo,
  createMetaAlineamiento,
  updateMetaAlineamiento,
  deleteMetaAlineamiento,
} from "./controllers/metasAlineamientoController";
import { get } from "http";
import { getMetasEmpresarialesAlineamiento } from "./controllers/metasEmpresarialesAlineamientoController";
import { getMetasAlineamientoGobierno } from "./controllers/metasAlineamientoGobiernoController";
import { getObjetivosGobierno } from "./controllers/objetivosGobiernoController";

const router = Router();

// Rutas para metas_empresariales
router.get("/metas_empresariales", getMetasEmpresariales);
router.get("/metas_empresariales/:codigo", getMetaEmpresarialByCodigo);
router.post("/metas_empresariales", createMetaEmpresarial);
router.put("/metas_empresariales/:id", updateMetaEmpresarial);
router.delete("/metas_empresariales/:id", deleteMetaEmpresarial);

// Rutas para metas_alineamiento
router.get("/metas_alineamiento", getMetasAlineamiento);
router.get("/metas_alineamiento/:codigo", getMetaAlineamientoByCodigo);
router.post("/metas_alineamiento", createMetaAlineamiento);
router.put("/metas_alineamiento/:id", updateMetaAlineamiento);
router.delete("/metas_alineamiento/:id", deleteMetaAlineamiento);

router.get(
  "/metas_empresariales_alineamiento",
  getMetasEmpresarialesAlineamiento
);

router.get("/metas_alineamiento_gobierno", getMetasAlineamientoGobierno);

router.get("/objetivos_gobierno", getObjetivosGobierno);

export default router;
