package categoriesdto

type CategoryResponse struct {
	ID   int    `json:"id"`
	Name string `json:"name" form:"name" validate:"required"`
	// Email    string `json:"email" form:"email" validate:"required"`
	// Password string `json:"password" form:"password" validate:"required"`
	// Phone    string `json:"phone" form:"phone" validate:"required"`
	// Gender   string `json:"gender" form:"gender" validate:"required"`
	// Address  string `json:"address" form:"address" validate:"required"`
	// Subcribe bool   `json:"subcribe" form:"subcribe"`
}
