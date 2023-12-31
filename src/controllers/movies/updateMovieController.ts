import { Request, Response } from "express";
import Movie from "../../models/Movie";

export const updateMovieController = async (req: Request, res: Response) => {
  try {
   const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        
        if (!movie) {
          return res.status(404).json({ message: "Pelicula no encontrada" });
        }
        res.status(200).json(movie);
  } catch (error) {
    res.status(500).json(error);
  }
};