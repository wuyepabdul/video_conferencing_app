import { generateStreamToken } from "../lib/stream.js";

export const getStreamToken = async (req, res) => {
  try {
    const token = generateStreamToken(req.user.id);

    res.status(200).json({ token });
  } catch (error) {
    console.log("error in getStreamToken controller", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
