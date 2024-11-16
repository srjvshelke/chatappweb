const {username,password}= process.env;

export const connectionStr = `mongodb+srv://${username}:${password}<db_password>@cluster0.rlnsc.mongodb.net/chatappdb?retryWrites=true&w=majority&appName=Cluster0`;
