import { Client, Storage, Databases, Query, ID} from "appwrite";

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
        eventType,
        price,
        date,
        url,
        ticketUrl
    })
    {
        try 
        {
            if(eventType === "all")
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
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }
            else if(eventType ==="concert"){
                return await this.database.createDocument(
                    envConfig.appwriteDatabaseId,
                    envConfig.appwriteConcertCollectionId,
                    slug,
                    {
                        title,
                        content,
                        location,
                        featuredImage,
                        userId,
                        status,
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }
            else{
                return await this.database.createDocument(
                    envConfig.appwriteDatabaseId,
                    envConfig.appwriteComedyCollectionId,
                    slug,
                    {
                        title,
                        content,
                        location,
                        featuredImage,
                        userId,
                        status,
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }

        } catch (error) {
            console.log("Error ::CreatePost", error);
        }
    }

    async deletePost(slug)
    {
        try {
            
            return await this.database.deleteDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteCollectionId,
                slug
            )
            return true;


        } catch (error) {
            console.log("Error :: DeletePost", error);
            return false;
        }
    }
    async deleteConcertPost(slug)
    {
        try {
            
            return await this.database.deleteDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteConcertCollectionId,
                slug
            )
            return true;


        } catch (error) {
            console.log("Error  concert :: DeletePost", error);
            return false;
        }
    }
    async deleteComedyPost(slug)
    {
        try {
            
            return await this.database.deleteDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteComedyCollectionId,
                slug
            )
            return true;


        } catch (error) {
            console.log("Error  comedy :: DeletePost", error);
            return false;
        }
    }

    async updatePost(slug,{
        title,
        content,
        location,
        featuredImage,
        userId,
        status,
        eventType,
        price,
        date,
        url,
        ticketUrl
    })
    {
        try {
            if(eventType === "all")
            {
                console.log(userId)
                return await this.database.updateDocument(
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
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }
            else if(eventType ==="concert"){
                console.log(userId)
                return await this.database.updateDocument(
                    envConfig.appwriteDatabaseId,
                    envConfig.appwriteConcertCollectionId,
                    slug,
                    {
                        title,
                        content,
                        location,
                        featuredImage,
                        userId,
                        status,
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }
            else{
                console.log(userId)
                return await this.database.updateDocument(
                    envConfig.appwriteDatabaseId,
                    envConfig.appwriteComedyCollectionId,
                    slug,
                    {
                        title,
                        content,
                        location,
                        featuredImage,
                        userId,
                        status,
                        eventType,
                        price,
                        date,
                        url,
                        ticketUrl
                    }
                )    
            }
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
    async getConcertPost({slug}){
        try {
            return await this.database.getDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteConcertCollectionId,
                slug,

            )
        } catch (error) {
            console.log("Error :: getConcertpost", error);
            return false;
        }
    }
    async getComedyPost({slug}){
        try {
            return await this.database.getDocument(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteComedyCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Error :: getComedypost", error);
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
    async getConcertPosts(queries = [Query.equal("eventType","concert")]){
        // console.log("query",queries)
        try {
            return await this.database.listDocuments(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteConcertCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Erros :: getposts", error);
            return false;
        }
    }
    async getComedyPosts(queries = [Query.equal("eventType","comedy")]){
        // console.log("query",queries)
        try {
            return await this.database.listDocuments(
                envConfig.appwriteDatabaseId,
                envConfig.appwriteComedyCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Erros :: getComedyposts", error);
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
             await this.storage.deleteFile(
                envConfig.appwriteBucketId,
                fileId,
            )
        } catch (error) {
            console.log("Error:: deleteFile ", error)
            return false;
        }
    }

    async getFilePreview(fileId)
    {   

        return this.storage.getFilePreview(
            envConfig.appwriteBucketId,
            fileId,
        )
        // try {
        //     return this.storage.getFilePreview(
        //         envConfig.appwriteBucketId,
        //         fileId,
        //     )
            
        // } catch (error) {
        //     console.log("Error:: getFile View", error)
        //     return false
        // }
    } 
    
    // user data from here

    // async getUserName(userId)
    // {
    //     try {
    //         const user = await this.users.get(userId);
    //         console.log("username ", user.name)
    //         return user.name
    //     } catch (error) {
    //         console.log("errors" , error)
    //     }
    // }
}

   

const configService = new Service();

export default  configService;