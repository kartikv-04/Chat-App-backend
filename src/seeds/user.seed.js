import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


config();

const rawUsers = [
  {
    email: "rahul.mehta@example.com",
    fullname: "Rahul Mehta",
    password: "123456",
    profilepic: "",
  },
  {
    email: "arjun.patel@example.com",
    fullname: "Arjun Patel",
    password: "123456",
    profilepic: "",
  },
  {
    email: "rohan.singh@example.com",
    fullname: "Rohan Singh",
    password: "123456",
    profilepic: "",
  },
  {
    email: "aman.banerjee@example.com",
    fullname: "Aman Banerjee",
    password: "123456",
    profilepic: "",
  },
  {
    email: "siddharth.kumar@example.com",
    fullname: "Siddharth Kumar",
    password: "123456",
    profilepic: "",
  },
  {
    email: "karthik.rao@example.com",
    fullname: "Karthik Rao",
    password: "123456",
    profilepic: "",
  },
  {
    email: "vishal.jain@example.com",
    fullname: "Vishal Jain",
    password: "123456",
    profilepic: "",
  },
];

export const seedDatabase = async () => {
  try {
    await connectDB();

    const existingUserCount = await User.countDocuments();
    if (existingUserCount > 0) {
      return;
    }

    const usersWithHashedPasswords = await Promise.all(
      rawUsers.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return { ...user, password: hashedPassword };
      })
    );

    await User.insertMany(usersWithHashedPasswords);
  } catch (error) {
      logger.error("Seeding failed", { error });
    }
};

