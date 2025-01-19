import { Client, Storage, Databases, Query, ID } from "appwrite";
import envConfig from "../envConfig/envConfig";

export class Service 
{
    client = new Client();
    database 
    storage 
    constructor(){

        this.client
        .setEndpoint(envConfig.appwriteUrl)
        .setProject(envConfig.appwriteProjectId);

        this.storage = new Storage(this.client);
        this.database = new Databases(this.client);

    }

    async createPost({
        slug,
        title,
        content,
        location,
        featuredImage,
        userId,
        status,
    })
    {
        try 
        {
            return await this.database.createDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    location,
                    featuredImage,
                    userId,
                    status,
                }
            )    

        } catch (error) {
            console.log("Error ::CreatePost", error);
        }
    }

    async deletePost({slug})
    {
        try {
            
            return await this.database.deleteDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug
            )
            

        } catch (error) {
            console.log("Error :: DeletePost", error);
            return false;
        }
    }

    async updatePost({
        title,
        slug,
        description,
        location,
        featuredImage,
        userId,
        status,
    })
    {
        try {
            return await this.database.updateDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,
                {
                    title,
                    description,
                    location,
                    featuredImage,
                    userId,
                    status,
                }
            )
        } catch (error) {
            console.log("Error :: updatePost",error);
        }
    }

    async getPost({slug}){
        try {
            return await this.database.getDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug,

            )
        } catch (error) {
            console.log("Error :: getpost", error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.database.listDocuments(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Erros :: getposts", error);
            return false;
        }
    }

    // images? idk

    async uploadFile(file)
    {
        try {
            
            return await this.storage.createFile(
                envConfig.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Error :: upload File", error);
            return false;
        }
    }

    async deleteFile({fileId})
    {
        try {
            return await this.storage.deleteFile(
                envConfig.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Error:: deleteFile ", error)
            return false;
        }
    }

    async getPreview(fileId)
    {
        try {
            return this.storage.getFilePreview(
                envConfig.appwriteBucketId,
                fileId,
            )
            
        } catch (error) {
            console.log("Error:: getFile View", error)
            return false
        }
    }        
}

const configService = new Service();

export default  configService;