package handlers

import (
	episodedto "dumbmerch/dto/episode"
	dto "dumbmerch/dto/result"
	"dumbmerch/models"
	"dumbmerch/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

// var path_filer = "http://localhost:5000/uploads/"

type handlerepisode struct {
	EpisodeRepository repositories.EpisodeRepository
}

func HandlerEpisode(EpisodeRepository repositories.EpisodeRepository) *handlerepisode {
	return &handlerepisode{EpisodeRepository}
}

func (h *handlerepisode) FindEpisode(c echo.Context) error {
	episodes, err := h.EpisodeRepository.FindEpisode()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	// for i, p := range episodes {
	// 	episodes[i].ThumbnailFilm = path_filer + p.ThumbnailFilm
	// }

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: episodes})
}

func (h *handlerepisode) GetEpisode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisode(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}
	// episode.ThumbnailFilm = path_filer + episode.ThumbnailFilm

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(episode)})
}

// func (h *handlerepisode) CreateEpisode(c echo.Context) error {
// 	// get the datafile here
// 	dataFile := c.Get("dataFile").(string)
// 	fmt.Println("this is data file", dataFile)

// 	filmid, _ := strconv.Atoi(c.FormValue("filmid"))

// 	request := episodedto.CreateEpisodeRequest{
// 		Title:         c.FormValue("title"),
// 		ThumbnailFilm: dataFile,
// 		LinkFilm:      c.FormValue("linkFilm"),
// 		FilmID:        filmid,
// 	}

// 	validation := validator.New()
// 	err := validation.Struct(request)
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
// 	}

// 	// userLogin := c.Get("userLogin")
// 	// categoryId := userLogin.(jwt.MapClaims)["id"].(float64)

// 	episode := models.Episode{
// 		Title:         request.Title,
// 		ThumbnailFilm: request.ThumbnailFilm,
// 		LinkFilm:      request.LinkFilm,
// 		// Image:  request.Image,
// 		// Qty:    request.Qty,
// 		FilmID: request.FilmID,
// 		// Description: request.Description,
// 	}

// 	episode, err = h.EpisodeRepository.CreateEpisode(episode)
// 	if err != nil {
// 		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
// 	}

// 	episode, _ = h.EpisodeRepository.GetEpisode(episode.ID)

// 	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: episode})
// }

func (h *handlerepisode) CreateEpisode(c echo.Context) error {
	request := new(episodedto.CreateEpisodeRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	episode := models.Episode{
		Title:         request.Title,
		ThumbnailFilm: request.ThumbnailFilm,
		LinkFilm:      request.LinkFilm,
		FilmID:        request.FilmID,
		Film:          request.Film,
	}

	data, err := h.EpisodeRepository.CreateEpisode(episode)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(data)})
}

func (h *handlerepisode) UpdateEpisode(c echo.Context) error {
	request := new(episodedto.UpdateEpisodeRequest)
	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	id, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisode(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Title != "" {
		episode.Title = request.Title
	}

	if request.ThumbnailFilm != "" {
		episode.ThumbnailFilm = request.ThumbnailFilm
	}

	if request.LinkFilm != "" {
		episode.LinkFilm = request.LinkFilm
	}
	if request.FilmID != 0 {
		episode.FilmID = request.FilmID
	}
	if request.Film.ID != 0 {
		episode.Film = request.Film
	}

	data, err := h.EpisodeRepository.UpdateEpisode(episode)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(data)})
}

func (h *handlerepisode) DeleteEpisode(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	episode, err := h.EpisodeRepository.GetEpisode(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.EpisodeRepository.DeleteEpisode(episode)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponseEpisode(data)})
}

func convertResponseEpisode(u models.Episode) models.Episode {
	return models.Episode{
		ID:            u.ID,
		Title:         u.Title,
		ThumbnailFilm: u.ThumbnailFilm,
		LinkFilm:      u.LinkFilm,
		Film:          u.Film,
		// Category:      u.Category,
	}
}
