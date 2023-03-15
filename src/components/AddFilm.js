import React, { useEffect, useState } from "react";
import { TextField, Button, MenuItem } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { object, string, bool } from "yup";
import styles from "./style.module.css";
import axios from "axios";
import { storeImageToFireBase } from "../utils/storeImageToFirebase";
import { ToastContainer, toast } from "react-toastify";
function AddFilm({ filmId, setFilmId }) {
  const [users, setUsers] = useState({
    name: "",
    year: "",
    clip: "",
    info: "",
    nation: "",
    famous: false,
    status: "save",
  });
  // const courseCategory = [
  //   {
  //     value: "ManchesterUnited",
  //     label: "ManchesterUnited",
  //   },
  //   {
  //     value: "Chelsea",
  //     label: "Chelsea",
  //   },
  //   {
  //     value: "Arghentina",
  //     label: "Arghentina",
  //   },
  // ];
  const [imageFront, setImageFront] = useState(null);
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `https://6411f0aaf9fe8122ae18568f.mockapi.io/db/${filmId}`,
      })
        .then((res) => {
          setUsers({ ...res.data, status: "update" });
          setImageFront(res.data.img);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    filmId && getAccountInfo();
    // eslint-disable-next-line
  }, []);
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setImageFront(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const handleSubmit = (values, formikHelpers) => {
    alert(JSON.stringify(values));
    if (values.status === "save") {
      axios({
        method: "POST",
        url: "https://6411f0aaf9fe8122ae18568f.mockapi.io/db",
        data: { ...values, img: imageFront },
      })
        .then((res) => {
          console.log(res);
          setImageFront(null);
          toast("Wow so easy!");
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (values.status === "update") {
      axios({
        method: "PUT",
        url: `https://6411f0aaf9fe8122ae18568f.mockapi.io/db/${filmId}`,
        data:
          imageFront !== null
            ? { ...values, image: imageFront }
            : { ...values },
      })
        .then((res) => {
          console.log(res);
          setImageFront(null);
          setFilmId(null);
          toast("Wow so easy!");
        })
        .catch((err) => {
          console.error(err);
        });
    }
    formikHelpers.resetForm();
    setUsers({
      name: "",
      year: "",
      clip: "",
      info: "",
      nation: "",
      famous: false,
      status: "save",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.register} style={{ marginTop: "20px" }}>
        <div className={styles.formRegisterEmail}>
          <div className={styles.title}>
            <h1>ADD FILM</h1>
          </div>
          <div className="MaterialForm">
            {imageFront && (
              <img
                className="profile_card"
                src={imageFront}
                alt=""
                style={{ width: "300px" }}
              />
            )}
            <div>
              {isLoading ? (
                <button
                  type="button"
                  disabled
                  style={{
                    opacity: ".4",
                    width: "30%",
                  }}
                  className="chooseFileButton btn btn-primary btn--m"
                >
                  loading..
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="chooseFileButton btn btn-primary btn--m"
                    style={{ width: "30%" }}
                  >
                    Chọn hình
                  </button>
                  <input
                    type="file"
                    name="profileImageUrl"
                    accept="image/*"
                    onChange={onSelectFile}
                    id="upload"
                    className="btn"
                    style={{
                      opacity: 0,
                      zIndex: 1,
                      left: 0,
                      width: "100%",
                      position: "absolute",
                    }}
                  />
                </>
              )}
            </div>
            <Formik
              initialValues={users}
              enableReinitialize
              validationSchema={object({
                name: string()
                  .required("Please enter name")
                  .min(2, "Name too short"),
                year: string()
                  .required("Please enter year")
                  .min(2, "cost too short"),
                // club: string().required("Select your club"),
                clip: string().required("Please enter clip"),
                info: string().required("Please enter info"),
                nation: string().required("Please enter message"),
                famous: bool().oneOf([true], "You need to accept the famous"),
                status: string(),
              })}
              onSubmit={(values, formikHelpers) => {
                handleSubmit(values, formikHelpers);
              }}
            >
              {({ errors, isValid, touched, dirty }) => (
                <Form>
                  <Field
                    name="name"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Name"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                  />
                  <Field
                    name="year"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="year"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.year) && Boolean(touched.year)}
                    helperText={Boolean(touched.year) && errors.year}
                  />
                  {/* <Field
                    select
                    id="club"
                    name="club"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="club"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.club) && Boolean(touched.club)}
                    helperText={Boolean(touched.club) && errors.club}
                  >
                    {courseCategory.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Field> */}
                  <Field
                    name="clip"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="clip"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.clip) && Boolean(touched.clip)}
                    helperText={Boolean(touched.clip) && errors.clip}
                  />
                  <Field
                    name="info"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="info"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.info) && Boolean(touched.info)}
                    helperText={Boolean(touched.info) && errors.info}
                  />
                  <Field
                    name="nation"
                    type="name"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="nation"
                    fullWidth
                    style={{ marginBottom: "20px" }}
                    error={Boolean(errors.nation) && Boolean(touched.nation)}
                    helperText={Boolean(touched.nation) && errors.nation}
                  />
                  <div className={styles.recap}>
                    <Field
                      name="famous"
                      type="checkbox"
                      color="primary"
                      style={{
                        zIndex: "10",
                        pointerEvents: "all",
                        width: "18px",
                        height: "23px",
                      }}
                    />
                    <span>By famous I agree</span>
                  </div>
                  <div style={{ display: "flex", color: " #f44336" }}>
                    {errors.famous && <span>{errors.famous}</span>}
                  </div>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={!isValid || !dirty}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default AddFilm;
