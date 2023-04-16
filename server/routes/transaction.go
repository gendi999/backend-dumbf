package routes

import (
	"dumbmerch/handlers"
	"dumbmerch/pkg/mysql"
	"dumbmerch/repositories"

	"github.com/labstack/echo/v4"
)

func TransactionRoutes(e *echo.Group) {
	transactionRepository := repositories.RepositoryTransaction(mysql.DB)
	h := handlers.HandlerTransaction(transactionRepository)

	e.GET("/transactions", h.FindTransaction)
	e.GET("/transaction/:id", h.GetTransaction)
	e.POST("/transaction", h.CreateTransaction)
	e.PATCH("/transaction/:id", h.UpdateTransaction)
	e.DELETE("/transaction/:id", h.DeleteTransaction)
}
