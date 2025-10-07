import Pocketbase from "pocketbase";

export const pb = new Pocketbase("http://localhost:8090");

export const getPosts = async () => {
  const records = await pb.collection("posts").getFullList();
  for (const record of records) {
    record.image = pb.files.getURL(record, record.image);
  }
  return records;
};
