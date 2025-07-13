import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Stream API key or API Secret is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//to upsert means create new user if not exit or update user if exist on stream
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.error("error upserting stream user: ", error);
  }
};

// TODO: to do later
export const generateStreamToken = (userId) => {};
