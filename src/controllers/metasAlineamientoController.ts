import { Request, Response } from "express";
import pool from "../db";

// Obtener todas las metas de alineamiento
export const getMetasAlineamiento = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM metas_alineamiento");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMetaAlineamientoByCodigo = async (
  req: Request,
  res: Response
) => {
  const codigo = req.params.codigo;
  try {
    const result = await pool.query(
      "SELECT * FROM metas_alineamiento WHERE codigo = $1",
      [codigo]
    );
    if (result.rows.length === 0) {
      console.log(`No se encontró meta de alineamiento con código: ${codigo}`);
      return res.status(404).json({ error: "Meta de alineamiento not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Crear meta de alineamiento
export const createMetaAlineamiento = async (req: Request, res: Response) => {
  const { codigo, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO metas_alineamiento (codigo, descripcion) VALUES ($1, $2) RETURNING *",
      [codigo, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar meta de alineamiento por código
export const updateMetaAlineamiento = async (req: Request, res: Response) => {
  const codigo = req.params.codigo;
  const { descripcion } = req.body;
  try {
    const result = await pool.query(
      "UPDATE metas_alineamiento SET descripcion = $1 WHERE codigo = $2 RETURNING *",
      [descripcion, codigo]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meta de alineamiento not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar meta de alineamiento por código
export const deleteMetaAlineamiento = async (req: Request, res: Response) => {
  const codigo = req.params.codigo;
  try {
    const result = await pool.query(
      "DELETE FROM metas_alineamiento WHERE codigo = $1 RETURNING *",
      [codigo]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meta de alineamiento not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
