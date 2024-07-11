import { Request, Response } from "express";
import pool from "../db";

// Obtener todas las metas empresariales
export const getMetasEmpresariales = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM metas_empresariales");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Obtener meta empresarial por código
export const getMetaEmpresarialByCodigo = async (
  req: Request,
  res: Response
) => {
  const codigo = req.params.codigo;
  try {
    const result = await pool.query(
      "SELECT * FROM metas_empresariales WHERE codigo = $1",
      [codigo]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meta empresarial not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Crear meta empresarial
export const createMetaEmpresarial = async (req: Request, res: Response) => {
  const { codigo, descripcion } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO metas_empresariales (codigo, descripcion) VALUES ($1, $2) RETURNING *",
      [codigo, descripcion]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar meta empresarial por código
export const updateMetaEmpresarial = async (req: Request, res: Response) => {
  const codigo = req.params.codigo;
  const { descripcion } = req.body;
  try {
    const result = await pool.query(
      "UPDATE metas_empresariales SET descripcion = $1 WHERE codigo = $2 RETURNING *",
      [descripcion, codigo]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meta empresarial not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar meta empresarial por código
export const deleteMetaEmpresarial = async (req: Request, res: Response) => {
  const codigo = req.params.codigo;
  try {
    const result = await pool.query(
      "DELETE FROM metas_empresariales WHERE codigo = $1 RETURNING *",
      [codigo]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Meta empresarial not found" });
    }
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
