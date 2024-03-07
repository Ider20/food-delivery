import User from "../models/userModel";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, address, password } = req.body;
  console.log(name, "name");
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      address,
      password: encryptedPassword,
    });
    res.status(201).send(user);
  } catch (error) {
    console.log(error, "There are problems to sign up");
    res.status(500).send("Something wrong");
  }
};
