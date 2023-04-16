import { useEffect, useRef, useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { BsPlus } from "react-icons/bs";
import { IoMdAttach } from "react-icons/io";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { Error, Success } from "../helpers/Toast";

function AddFilm() {
  const [categories, setCategories] = useState([]) //Store all category data

  // const navigate = useNavigate()

  // data yang akan dikirimkan ke backend
  const [form, setForm] = useState({
    title: '',
    thumbnailfilm: '',
    year: '',
    description: '',
    category_id: ''
  }) //Store product data

   // Fetching category data
   const getCategories = async () => {
    try {
      const response = await API.get('/categories')
      setCategories(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

   // Handle change data on form
   const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    })

    // Create image url for preview
    if (e.target.type === 'file') {
      let url = URL.createObjectURL(e.target.files[0])
    }
  }

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()

      // Configuration
      const config = {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      }
       // Store data with FormData as object
       const formData = new FormData()
       formData.set('title', form.title)
       formData.set('image', form.thumbnailfilm[0], form.thumbnailfilm[0].name)
       formData.set('year', Number(form.year))
       formData.set('description', form.description)
       formData.set('categoryid', Number(form.category_id))
 
       // Insert product data
       const response = await API.post('/film', formData, config)
       console.log("add product success : ", response)
       // navigate('/')
     } catch (error) {
       console.log("add product failed : ", error)
       console.log(form)
     }
   })
 
   useEffect(() => {
     getCategories()
   }, [])
 
   const fileInputRefAttach = useRef(null)
 
   const handleClickAttach = () => {
     fileInputRefAttach.current.click()
   }


  // document.title = "Add Film | Dumbflix";
  // const [dataFilm, setDataFilm] = useState({
  //   title: "",
  //   image: "",
  //   year: "",
  //   category_id: "",
  //   description: "",
  // });

  // const [dataEpisode, setDataEpisode] = useState({
  //   title_episode: "",
  //   image: "",
  //   linkfilm: "",
  // });

  // const [episodePlus, setEpisodePlus] = useState([
  //   {
  //     title_episode: "",
  //     image: "",
  //     linkfilm: "",
  //   },
  // ]);

  // function handlePlusEpisode(e) {
  //   e.preventDefault();
  //   Success({ message: "Succes" });
  //   setEpisodePlus([
  //     ...episodePlus,
  //     {
  //       title: "Title",
  //       linkFilm: "Link Film",
  //     },
  //   ]);
  // }

  // function handleChangeFilm(e) {
  //   console.log("punya film", e.target.name);
  //   setDataFilm({
  //     ...dataFilm,
  //     [e.target.name]:
  //       e.target.type === "file" ? e.target.files[0] : e.target.value,
  //   });
  // }

  // function handleChangeEpisode(e) {
  //   // const episodeData = dataEpisode?.map((item, i) => {
  //   //   if (i === index) {
  //   //     return [{ ...item }, { [e.target.name]: e.target.value }]
  //   //   }
  //   // })
  //   console.log("punya episode", e.target.name);
  //   setDataEpisode({
  //     ...dataEpisode,
  //     [e.target.name]:
  //       e.target.type === "file" ? e.target.files[0] : e.target.value,
  //   });
  // }

  // let { data: categories } = useQuery("categoriesCache", async () => {
  //   const response = await API.get("/categories");
  //   return response.data.data;
  // });

  // const handleSubmit = useMutation(async (e) => {
  //   let submitFilm;
  //   let submitEpisode;
  //   e.preventDefault();
  //   console.log("data film", dataFilm);
  //   console.log("data episode", dataEpisode);

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.token}`,
  //     },
  //   };
  //   try {
  //     const formDataFilm = new FormData();
  //     formDataFilm.set("title", dataFilm.title);
  //     formDataFilm.set("image", dataFilm.image, dataFilm.image.name);
  //     formDataFilm.set("year", dataFilm.year);
  //     formDataFilm.set("category_id", dataFilm.category_id);
  //     formDataFilm.set("description", dataFilm.description);

  //     for (var pair of formDataFilm.entries()) {
  //       console.log(pair[0] + ", " + pair[1]);
  //     }

  //     submitFilm = await API.post("/film", formDataFilm, config, {
  //       validateStatus: () => true,
  //     });
  //     console.log("submit film", submitFilm);
  //     setDataFilm({
  //       title: "",
  //       image: "",
  //       year: "",
  //       category_id: "",
  //       description: "",
  //     });
  //     Success({ message: "Film berhasil ditambahkan!" });
  //   } catch (err) {
  //     Error({
  //       message: `Gagal menambahkan film!`,
  //     });
  //     console.log(err);
  //   }

  //   try {
  //     const formDataEpisode = new FormData();
  //     formDataEpisode.set("title_episode", dataEpisode.title_episode);
  //     formDataEpisode.set("image", dataEpisode.image, dataEpisode.image.name);
  //     formDataEpisode.set("linkfilm", dataEpisode.linkfilm);
  //     formDataEpisode.set("film_id", submitFilm?.data.data.id); // dapet films id yang habis di create

  //     submitEpisode = await API.post("/episode", formDataEpisode, config, {
  //       validateStatus: () => true,
  //     });

  //     console.log("submit episode", submitEpisode);
  //     setDataEpisode({
  //       title_episode: "",
  //       image: "",
  //       linkfilm: "",
  //     });
  //     Success({ message: "Episode berhasil ditambahkan!" });
  //   } catch (err) {
  //     await API.delete(`/film/${submitFilm.data.data.id}`, config, {
  //       validateStatus: () => true,
  //     });
  //     Error({
  //       message: `Gagal menambahkan episode!`,
  //     });
  //   }
  // });

  return (
    <>
      <div
        className="bg-black text-white py-5"
        style={{ padding: "0px 170px" }}>
        <h5 className="fw-bold mb-5 ">Add Film</h5>
        <Form className="secondary" onSubmit={(e) => handleSubmit.mutate(e)}>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  height: "50px",
                  color: "white",
                }}
                name="title"
                onChange={handleChange}
                // value={dataFilm?.title}
              />
            </Col>

            <Col md={12} lg={4} xl={3}>
              <label
                htmlFor="thumbnailFilm"
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  // width: "350px",
                  // height: "50px",
                  padding: "8px 40px 8px 40px",
                  color: "#6C757D",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "lighter",
                }}>
                Attach Thumbnail
                <IoMdAttach
                  style={{
                    color: "#E50914",
                    // marginLeft: "70px",
                    fontSize: "30px",
                    marginLeft: "8px",
                  }}
                />
              </label>
              <input
                type="file"
                name="thumbnailfilm"
                onChange={handleChange} ref={fileInputRefAttach}
                onClick={handleClickAttach} 
                id="thumbnailFilm"
                hidden
              />
            </Col>
          </Row>

          <Form.Group className="mb-4" controlId="formGridAddress1">
            <Form.Control
              style={{
                background: "rgba(210, 210, 210, 0.25)",
                height: "50px",
                color: "white",
              }}
              type="number"
              placeholder="Year"
              name="year"
              onChange={handleChange}
              // value={dataFilm?.year}
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formGridAddress2">
            <InputGroup className="mb-3 mt-3">
              <Form.Select
onChange={handleChange}
                style={{
                  backgroundColor: "#353535",
                  borderColor: "white",
                  color: "#6C757D",
                }}
                name="category_id"
                >
                <option value="">Select Category</option>
                {categories?.map((item) => {
                  return (
                    <option value={item.id} name={item.id}>
                      {item.name}
                    </option>
                    
                  );
                })}
              </Form.Select>
            </InputGroup>
          </Form.Group>

          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            style={{
              background: "rgba(210, 210, 210, 0.25)",
              marginBottom: "66px",
              resize: "none",
              height: "177px",
              color: "white",
            }}
            name="description"
            onChange={handleChange}
            // value={dataFilm?.description}
          />

          {/* episode */}

          {/* {episodePlus?.map((item, i) => {
            return (
              <>
                <div key={i.toString()}>
                  <Row className="mb-4">
                    <Col md={12} lg={8} xl={9}>
                      <Form.Control
                        type="text"
                        placeholder="Title"
                        style={{
                          background: "rgba(210, 210, 210, 0.25)",
                          height: "50px",
                          color: "white",
                        }}
                        name="title_episode"
                        onChange={(e) => handleChangeEpisode(e)}
                        value={dataEpisode?.title}
                      />
                    </Col>
                    <Col md={12} lg={4} xl={3}>
                      <label
                        htmlFor="thumbnailEpisode"
                        style={{
                          background: "rgba(210, 210, 210, 0.25)",
                          padding: "8px 40px 8px 40px",
                          color: "#6C757D",
                          borderRadius: "6px",
                          border: "1px solid white",
                          fontSize: "14px",
                          fontWeight: "lighter",
                        }}>
                        Attach Thumbnail
                        <IoMdAttach
                          style={{
                            color: "#E50914",
                            fontSize: "30px",
                            marginLeft: "8px",
                          }}
                        />
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={handleChangeEpisode}
                        id="thumbnailEpisode"
                        hidden
                      />
                    </Col>
                  </Row>

                  <Form.Group className="mb-4" controlId="formGridAddress1">
                    <Form.Control
                      style={{
                        background: "rgba(210, 210, 210, 0.25)",
                        height: "50px",
                        color: "white",
                      }}
                      type="url"
                      placeholder="Link Episode/Film"
                      name="linkfilm"
                      onChange={(e) => handleChangeEpisode(e)}
                      value={dataEpisode?.linkEpisode}
                    />
                  </Form.Group>
                </div>
              </>
            );
          })}

          <Form.Group className="mb-5" controlId="formGridAddress1">
            <div>
              <button
                style={{
                  background: "rgba(210, 210, 210, 0.25)",
                  width: "100%",
                  height: "50px",
                  borderRadius: "6px",
                  border: "1px solid white",
                }}
                onClick={handlePlusEpisode}>
                <BsPlus
                  style={{
                    color: "#E50914",
                    fontSize: "30px",
                    fontWeight: "bolder",
                  }}
                />
              </button>
            </div>
          </Form.Group> */}
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button
              type="submit"
              style={{
                width: "200px",
                height: "40px",
                background: "#E50914",
                border: "1px solid black",
                fontWeight: "bold",
              }}
              >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default AddFilm;