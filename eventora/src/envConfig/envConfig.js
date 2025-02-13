const envConfig = {
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinymceAPIKey : String(import.meta.env.VITE_EDITOR_API_KEY),
    appwriteConcertCollectionId : String(import.meta.env.VITE_APPWRITE_CONCERT_ID),
    appwriteComedyCollectionId : String(import.meta.env.VITE_APPWRITE_COMEDY_ID),
}

export default envConfig