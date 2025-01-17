import { Request, Response } from "express";
import pool from "../db";

// Obtener todas las metas empresariales
export const getMetasEmpresarialesAlineamiento = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await pool.query(
      "SELECT * FROM metas_empresariales_alineamiento"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
