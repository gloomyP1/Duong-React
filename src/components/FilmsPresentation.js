import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import { Films } from '../shared under/ListOfFilms';
// Custom hook for toggling theme mode
function useToggle(initialValue) {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
}

export default function FilmPresentation({ setFilmId, loading, setLoading }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isDarkMode, toggleDarkMode] = useToggle(false);
  const [state, setState] = useState(null);
  const [value, setValue] = useState(false);
  const [isLogin, setIsLogin] = useState(null);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: "https://6411f0aaf9fe8122ae18568f.mockapi.io/db",
      })
        .then((res) => {
          setState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [value]);
  const deleteFilm = (id) => {
    fetch(`https://6411f0aaf9fe8122ae18568f.mockapi.io/db/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setValue(!value);
        toast("Wow so easy!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(
    () => {
      setLoading(false);
      setIsLogin(JSON.parse(localStorage.getItem("userLogin")));
    },
    // eslint-disable-next-line
    [loading]
  );

  const onUpdate = (id) => {
    setFilmId(id);
    navigate("/addFilm");
  };

  function handleOpenModal(film) {
    setSelectedFilm(film);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setSelectedFilm(null);
    setIsModalOpen(false);
  }

  return (
    <div className={`${isDarkMode ? "bg-dark text-black" : "text-white"}`}>
      <div className="container">
        <div className="row">
          {state &&
            state.map((film) => (
              <div key={film.id} className="col-md-4 col-sm-6 mb-5">
                <div className="card h-100 shadow">
                  <img
                    className="card-img-top"
                    src={film.img}
                    alt={film.title}
                  />
                  <div className="card-body">
                    {/* <h5 className="card-title text-center mb-3">{film.title}</h5>
                <p className="card-text text-center font-weight-bold">{film.nation}</p>
                <p className="card-text text-center">{film.year}</p> */}
                    <div className="d-flex justify-content-center mt-3">
                      {isLogin && (
                        <>
                          <Link to="/addFilm" onClick={() => onUpdate(film.id)}>
                            <button className="btn btn-outline-dark w-100 confirmButton">
                              Update
                            </button>
                          </Link>
                          <Link to="#" onClick={() => deleteFilm(film.id)} style={{padding: "0 10px"}}>
                            <button className="btn btn-outline-dark w-100 closeButton">
                              Delete
                            </button>
                          </Link>
                        </>
                      )}
                      <Link to={`detail/${film.id}`}>
                        <button className="btn btn-outline-dark w-100">
                          Detail
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          style={{ content: { width: 500, height: 500 } }}
        >
          {selectedFilm && (
            <div>
              <h2>{selectedFilm.title}</h2>
              <p>{selectedFilm.img}</p>
              <p>{selectedFilm.nation}</p>
              <p>{selectedFilm.year}</p>
              <p>{selectedFilm.desc}</p>
              <p>{selectedFilm.clip}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          )}
        </Modal>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="d-flex justify-content-end mt-3">
          <button className="btn btn-danger " onClick={toggleDarkMode}>
            {isDarkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </div>
  );
}
