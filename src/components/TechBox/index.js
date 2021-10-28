import {
  AddCard,
  CardBox,
  AddNewTechBox,
  Form,
  SelectBox,
  Container,
} from "./style";
import Card from "../Card";
import Input from "../Input";
import { MdAddCircle } from "react-icons/md";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { AiFillCloseCircle } from "react-icons/ai";
import api from "../../services/api";
import { toast } from "react-toastify";

const TechBox = () => {
  const [isAddingTech, setIsAddingTech] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [id] = useState(localStorage.getItem("@KenzieHub:id"));
  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  const schema = yup.object().shape({
    title: yup.string().required("Field required"),
    status: yup.string().required("Field required"),
  });

  useEffect(() => {
    loadTechs();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleNewTechnology = async (data) => {
    await api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => toast.success("Tech added!"))
      .catch((_) => toast.error("You've already added that tech."));
    setIsAddingTech(false);
    loadTechs();
  };

  const loadTechs = () => {
    api.get(`/users/${id}`).then((res) => setTechnologies(res.data.techs));
  };

  return (
    <Container>
      <CardBox>
        <h2>My Technologies</h2>
        <div>
          {technologies.map((tech) => (
            <Card
              tech={tech.title}
              level={tech.status}
              id={tech.id}
              loadTechs={loadTechs}
              key={tech.id}
            />
          ))}
          <AddCard onClick={() => setIsAddingTech(true)}>
            <MdAddCircle />
          </AddCard>
        </div>
      </CardBox>
      {isAddingTech && (
        <AddNewTechBox>
          <Form onSubmit={handleSubmit(handleNewTechnology)}>
            <AiFillCloseCircle onClick={() => setIsAddingTech(false)} />
            <h2>Add New Tech</h2>
            <Input
              register={register}
              name="title"
              label="Name"
              error={errors.title?.message}
            />
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
              Add
            </Button>
          </Form>
        </AddNewTechBox>
      )}
    </Container>
  );
};

export default TechBox;
