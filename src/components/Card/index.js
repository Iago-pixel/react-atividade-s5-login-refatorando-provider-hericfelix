import { CardBox, Container, EditTechBox, Form, SelectBox } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { HiCog } from "react-icons/hi";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { AiFillCloseCircle } from "react-icons/ai";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

const Card = ({ tech, level, id, loadTechs }) => {
  const [edit, setEdit] = useState(false);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  const schema = yup.object().shape({
    status: yup.string().required("Field required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleDelete = async () => {
    await api.delete(`/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    loadTechs();
  };

  const handleEdit = async ({ status }) => {
    await api
      .put(
        `/users/techs/${id}`,
        {
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Tech updated!"));

    setEdit(false);
    loadTechs();
  };

  return (
    <CardBox>
      <div>{tech.length < 15 ? tech : tech.substring(0, 12).concat("...")}</div>
      <p>{level}</p>

      <Container>
        <HiCog onClick={() => setEdit(true)} />
        <BsTrashFill onClick={handleDelete} />
      </Container>
      {edit && (
        <EditTechBox>
          <Form onSubmit={handleSubmit(handleEdit)}>
            <AiFillCloseCircle onClick={() => setEdit(false)} />
            <h2>Edit {tech}</h2>
            <SelectBox>
              <p>
                Status
                {!!errors.status?.message && (
                  <span>{errors.status?.message}</span>
                )}
              </p>
              <select {...register("status")}>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </SelectBox>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="secondary"
            >
              Edit
            </Button>
          </Form>
        </EditTechBox>
      )}
    </CardBox>
  );
};

export default Card;
