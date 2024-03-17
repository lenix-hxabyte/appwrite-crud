import { Client } from "appwrite";

const collectionID = "65f31e9b41354ac5fb57"; // your collection ID
const databaseID = "65ef35bf5d71b6ca4a7c"; // Your database ID
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // We set the endpoint, change this if your using another endpoint URL.
  .setProject("65eef2e3e025ba72a15c"); // Here replace 'ProjectID' with the project ID that you created in your appwrite installation.

export { client, collectionID, databaseID }; // Finally export the client to be used in projects.
