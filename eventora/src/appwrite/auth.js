import { Client, Account, ID } from "appwrite";
import config from '../envConfig/envConfig'

export class AuthService{
    client = new Client();
    account

    constructor(){
        this.client.setProject(config.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name})
    {
        try {
            const newAccount = await this.account.create(ID.unique(),email, password, name);

            if(newAccount)
            {
                console.log("Account created succesfully",newAccount);
            }
            else{
                return newAccount
            }
        } catch (error) {
            console.log("CreateAccount :: Erorr", error);
        }

    }

    async login({email, password})
    {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Error :: login", error);
        }
    }

    async logout()
    {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Error:: logout", error);
        }
    }

    async getUserData()
    {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Error:: getuserdata", error);
        }
    }

}

export const authService = new AuthService()
