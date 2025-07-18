import { Request, Response } from "express";

// Model
import { MovieModel } from "../models/Movie";

// Logger
import Logger from "../../config/logger";
import { error } from "console";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Ocorreu um erro inesperado. Por favor tente mais tarde." })
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
   const id = req.params.id
   const movie = await MovieModel.findById(id)
   if (!movie) {
    return res.status(404).json({ error: "Este filme não existe" })
   }
   return res.status(200).json(movie)
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Ocorreu um erro inesperado. Por favor tente mais tarde." })
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
   const movies = await MovieModel.find()
   return res.status(200).json(movies) 
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Ocorreu um erro inesperado. Por favor tente mais tarde." })
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
   const id = req.params.id
   const movie = await MovieModel.findById(id)
   if (!movie) {
    return res.status(404).json({ error: "Este filme não existe" })
   }
   await movie.delete()
   return res.status(200).json({ msg: "Filme removido com sucesso" })
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Ocorreu um erro inesperado. Por favor tente mais tarde." })
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const id = req.params.id
    const data = req.body
    const movie = await MovieModel.findById(id)
    if (!movie) {
      return res.status(404).json({ error: "Este filme não existe" })
    }
    await MovieModel.updateOne({_id: id}, data)
    return res.status(200).json(data)
  } catch (e: any) {
    Logger.info(`Erro no sistema: ${e.message}`);
    return res.status(500).json({ error: "Ocorreu um erro inesperado. Por favor tente mais tarde." })
  }
}