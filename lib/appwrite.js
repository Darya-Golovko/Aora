import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite"
export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.jsm.aora',
  projectId: '66258204b3809b445bfd',
  databaseId: '662586cda8a72e6dd26a',
  userCollectionId: '6625871bc99d60059449',
  videoCollectionId: '6625877b718d24a053a2',
  storageId: '66258ca7289bdfac2a08'
}

const {
  endpoint,
  platform,
  projectId,
  databaseId,
  userCollectionId,
  videoCollectionId,
  storageId,
} = config;

const client = new Client();

client
   .setEndpoint(config.endpoint)
   .setProject(config.projectId)
   .setPlatform(config.platform)

   const account = new Account(client);
   const avatars = new Avatars(client);
   const databases = new Databases(client);
   // Register User
   export const createUser = async (email, password, username) =>{
       try {
         console.log(account.get());

         const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
         )

         if(!newAccount) throw Error;

         const avatarUrl = avatars.getInitials(username);

         // await account.deleteSession('current');
          await signIn(email, password);

         console.log(account.get());

         const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accontId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
         )
         return newUser;
       } catch (error) {
         console.log(error);
         throw new Error(error);
       }

    }

    export async function signIn(email, password){
        try {
            const session = await account.createEmailSession(email, password)

            return session;
        } catch (error) {
           throw new Error(error);
        }
    }

    export const getAllPosts = async () =>{
      try {
         const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId
         )

         return posts.documents;
      } catch (error) {
         throw new Error(error);
      }
    }

    export const getLatestPosts = async () =>{
      try {
         const posts = await databases.listDocuments(
            databaseId,
            videoCollectionId,
            [Query.orderDesc('$createdAt', Query.limit(7))]
         )

         return posts.documents;
      } catch (error) {
         throw new Error(error);
      }
    }