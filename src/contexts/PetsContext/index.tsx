import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { IFormSchemaRegisterPet } from "../../components/CartModal/RegisterPet";
import { IPet } from "../../interfaces/Reservations";
import { IProviderProps } from "../../interfaces/User";
import { api } from "../../services";

interface IPetContext {
  pets?: IPet[];
  createPet: (data: IFormSchemaRegisterPet) => void;
  isOpenPetModal: boolean;
  handleOpenPetModal: () => void;
  handleClosePetModal: () => void;
}

interface IPetRes {
  data: IPet[];
}

const PetContext = createContext({} as IPetContext);

export const PetContextProvider = ({ children }: IProviderProps) => {
  const [pets, setPets] = useState<IPet[]>();
  const [isOpenPetModal, setIsOpenPetModal] = useState(false);

  const handleOpenPetModal = () => setIsOpenPetModal(true);
  const handleClosePetModal = () => setIsOpenPetModal(false);

  const createPet = (data: IFormSchemaRegisterPet) => {
    console.log(data);
    api
      .post("/pets", data)
      .then(() => {
        toast.success("Pet adicionado!");
      })
      .catch(() => {
        toast.error("Não foi possível realizar o cadastro.");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("@me-au:token");
    api.defaults.headers.authorization = `Bearer ${token}`;
    if (token) {
      api
        .get("/pets")
        .then((res: IPetRes) => setPets(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  console.log(pets);
  return (
    <PetContext.Provider
      value={{
        createPet,
        handleOpenPetModal,
        handleClosePetModal,
        isOpenPetModal,
        pets,
      }}
    >
      {children}
    </PetContext.Provider>
  );
};

export const usePetContext = () => useContext(PetContext);
