package routes

import (
	"dumbmerch/handlers"
	"dumbmerch/pkg/middleware"
	"dumbmerch/pkg/mysql"
	"dumbmerch/repositories"

	"github.com/labstack/echo/v4"
)

func EpisodeRoutes(e *echo.Group) {
	episodeRepository := repositories.RepositoryEpisode(mysql.DB)
	h := handlers.HandlerEpisode(episodeRepository)

	e.GET("/episodes", h.FindEpisode)
	e.GET("/episode/:id", h.GetEpisode)
	e.POST("/episode", middleware.Auth(h.CreateEpisode))
	e.PATCH("/episode/:id", middleware.Auth(h.UpdateEpisode))
	e.DELETE("/episode/:id", h.DeleteEpisode)
}
