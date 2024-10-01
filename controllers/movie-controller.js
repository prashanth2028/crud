import movieschema from "../models/movie-model.js";

 export const movieIndex = async (req,res) => {
    try {
       const movielist= await movieschema.find();
        res.json(movielist);
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const create = async (req,res) => {

    const createMovie = movieschema({
        title: req.body.title,
        desc: req.body.desc,
    });

    try {
        const moviesucc = await createMovie.save();
        return res.status(200).json(moviesucc);

    } catch (error) {
        return res.status(400).json({message: error.message});

        
    } 
}

export const Detail = async (req, res) => {
    try {
      const movie = await movieschema.findById(req.params.id);
  
      if (movie == null) {
        return res.status(404).json({ message: "Cannot find movie" });
      } else {
        res.json(movie);
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
export const update = async (req,res) => {
    try {
        const updatedMovie = await movieschema.findOneAndUpdate(
          { _id: req.params.id },
          {
            title: req.body.title,
            desc: req.body.desc,
          },
          {
            new: true,
          }
        );
        res.status(200).json(updatedMovie);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
};

export const moviedelete = async (req,res) => {
    const movieId = req.params.id;

    try {
      await movieschema.deleteOne({ _id: movieId });
      res.json({ message: "Movie deleted!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};