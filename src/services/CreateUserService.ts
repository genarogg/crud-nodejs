import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUser {
  username: string;
  email: string;
  telefono: string;
  ciudad: string;
  estado: string;
}

class CreateUserService {
<<<<<<< HEAD
  async create({ username, email, telefono, ciudad, estado }: IUser) {
    if (!username || !email || !telefono || !ciudad || !estado) {
=======
  async create({ username, email, telefone, cidade, estado }: IUser) {
    if (!username || !email || !telefone || !cidade || !estado) {
>>>>>>> head
      throw new Error("Por favor rellena todos los campos");
    }

    const usersRepository = getCustomRepository(UsersRepository);

    const usernameAlreadyExists = await usersRepository.findOne({ username });

    if (usernameAlreadyExists) {
      throw new Error("El nombre de usuario ya está registrado");
    }

    const emailAlreadyExists = await usersRepository.findOne({ email });

    if (emailAlreadyExists) {
      throw new Error("El correo electrónico ya está registrado");
    }

    const user = usersRepository.create({
      username,
      email,
      telefono,
      ciudad,
      estado,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
