import { useState } from "react";
import axios from "axios";

const Post = () => {

    const [addMovie, setAddMovie] = useState({ msName: "", msAbout: "", msPoster: "", msLink: "", msSeason: "", msCategory: "", msType: "", msYear: "", msGenre: [], msRating: "", msUploadedBy: "" });

    const [loading, setLoading] = useState(false);

    const handleAddMovie = async () => {
        setLoading(true);
        try {
            const response = await axios.post("http://localhost:5000/movieseries/post", addMovie, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(`${addMovie.msName} added successfully`, response.data);
        } catch (error) {
            console.error("Error adding movie:", error);
        } finally {
            setLoading(false);
        };
    };

    const onChangeAddMovie = (e) => {
        const { name, value } = e.target;
        if (name === "msGenre") {
            setAddMovie((prev) => ({
                ...prev, [name]: value.split(",").map((genre) => genre.trim())
            }));
        } else {
            setAddMovie((prev) => ({
                ...prev, [name]: value
            }));
        };
    };

    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="card p-3">
                    <div className="card-body text-center">
                        <h1 className="bg-primary-subtle text-primary-emphasis">Movie - Series</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Enter the title...</label>
                            <input type="text" className="form-control" id="name" name="msName" value={addMovie.msName} onChange={onChangeAddMovie} placeholder="Eg: Interstellar" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="about" className="form-label">Enter the description...</label>
                            <textarea itemType="text" className="form-control" rows="3" id="about" name="msAbout" value={addMovie.msAbout} onChange={onChangeAddMovie} placeholder="A team of explorers travel beyond this galaxy through a newly discovered wormhole to discover whether mankind has a future among the stars."></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="poster" className="form-label">Enter the poster link...</label>
                            <input type="text" className="form-control" id="poster" name="msPoster" value={addMovie.msPoster} onChange={onChangeAddMovie} placeholder="Eg: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">Enter the ott link...</label>
                            <input type="text" className="form-control" id="link" name="msLink" value={addMovie.msLink} onChange={onChangeAddMovie} placeholder="Eg: https://www.primevideo.com/region/eu/detail/Interstellar/0PUNMGZEWOMYFKR1XIGOLTL2YM" />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="category" className="form-label">Select the categorgy...</label>
                            <select className="form-select" id="category" name="msCategory" value={addMovie.msCategory} onChange={onChangeAddMovie}>
                                <option value="">---Select---</option>
                                <option value="movie">Movie</option>
                                <option value="tv-show">Tv Show</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="type" className="form-label">Select the type...</label>
                            <select className="form-select" id="type" name="msType" value={addMovie.msType} onChange={onChangeAddMovie}>
                                <option value="">---Select---</option>
                                <option value="bollywood">Bollywood</option>
                                <option value="hollywood">Hollywood</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="genre" className="form-label">Enter the genre (comma-separated)...</label>
                            <input type="text" className="form-control" id="genre" name="msGenre" value={addMovie.msGenre} onChange={onChangeAddMovie} placeholder="Eg: Science Fiction • Adventure • Intense • Heavy" />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="season" className="form-label">Enter the part/season, enter 0 if movie...</label>
                            <input type="number" className="form-control" id="season" name="msSeason" value={addMovie.msSeason} onChange={onChangeAddMovie} placeholder="Eg: 0" />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="year" className="form-label">Enter the year...</label>
                            <input type="text" className="form-control" id="year" name="msYear" value={addMovie.msYear} onChange={onChangeAddMovie} placeholder="Eg: 2014" />
                        </div>
                        <div className="mb-3 col-6">
                            <label htmlFor="rating" className="form-label">Enter the imdb rating...</label>
                            <input type="text" className="form-control" id="rating" name="msRating" value={addMovie.msRating} onChange={onChangeAddMovie} placeholder="Eg: 8.7" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="uploadedBy" className="form-label">Select the person who is uploading the...</label>
                            <select className="form-select" id="uploadedBy" name="msUploadedBy" value={addMovie.msUploadedBy} onChange={onChangeAddMovie}>
                                <option value="">---Select the name---</option>
                                <option value="Trisha Sharma">Trisha Sharma</option>
                                <option value="Vijayant Joshi">Vijayant Joshi</option>
                            </select>
                        </div>
                        <div className="text-center">
                            <button type="button" className="btn btn-dark" onClick={handleAddMovie}>
                                {loading ? "Loading" : "Add movie/series"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;