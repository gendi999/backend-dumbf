package handlers

import (
	categoriesdto "dumbmerch/dto/category"
	dto "dumbmerch/dto/result"
	"dumbmerch/models"
	"dumbmerch/repositories"
	"net/http"
	"strconv"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
)

type handlerCategory struct {
	CategoryRepository repositories.CategoryRepository
}

func HandlerCategory(CategoryRepository repositories.CategoryRepository) *handlerCategory {
	return &handlerCategory{CategoryRepository}
}
func (h *handlerCategory) FindCategory(c echo.Context) error {
	categories, err := h.CategoryRepository.FindCategory()
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: categories})
}
func (h *handlerCategory) GetCategory(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	category, err := h.CategoryRepository.GetCategory(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: category})
}
func (h *handlerCategory) CreateCategory(c echo.Context) error {
	request := new(categoriesdto.CreateCategoryRequest)
	if err := c.Bind(request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	validation := validator.New()
	err := validation.Struct(request)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	category := models.Category{
		Name: request.Name,
		// Email:    request.Email,
		// Password: request.Password,
	}

	data, err := h.CategoryRepository.CreateCategory(category)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponsecategory(data)})
}
func (h *handlerCategory) UpdateCategory(c echo.Context) error {
	request := new(categoriesdto.UpdateCategoryRequest)
	if err := c.Bind(&request); err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	id, _ := strconv.Atoi(c.Param("id"))

	category, err := h.CategoryRepository.GetCategory(id)

	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	if request.Name != "" {
		category.Name = request.Name
	}

	// if request.Email != "" {
	// 	user.Email = request.Email
	// }

	// if request.Password != "" {
	// 	user.Password = request.Password
	// }

	data, err := h.CategoryRepository.UpdateCategory(category)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponsecategory(data)})
}
func (h *handlerCategory) DeleteCategory(c echo.Context) error {
	id, _ := strconv.Atoi(c.Param("id"))

	category, err := h.CategoryRepository.GetCategory(id)
	if err != nil {
		return c.JSON(http.StatusBadRequest, dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()})
	}

	data, err := h.CategoryRepository.DeleteCategory(category, id)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()})
	}

	return c.JSON(http.StatusOK, dto.SuccessResult{Code: http.StatusOK, Data: convertResponsecategory(data)})
}
func convertResponsecategory(u models.Category) categoriesdto.CategoryResponse {
	return categoriesdto.CategoryResponse{
		ID:   u.ID,
		Name: u.Name,
		// Email:    u.Email,
		// Password: u.Password,
	}
}
