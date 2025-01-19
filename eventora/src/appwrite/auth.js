import { Client, Account, ID } from "appwrite";
import config from '../envConfig/envConfig'

export class AuthService{
    client = new Client();
    account

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);


        this.account = new Account(this.client)
    }

    async createAccount({email, password, name})
    {
        try {
            const newAccount = await this.account.create(ID.unique(),email, password, name);

            if(newAccount)
            {
                const isSessioned = this.getUserData();
                if(isSessioned)
                    {
                        console.log("A session is created at time of signup hai");
                        return true;
                    }
                    
                    else{
                        console.log("nah no session");
                        this.login(email, password)
                    }
            }

            else{
                return newAccount;
            }

        } catch (error) {
            console.log("CreateAccount :: Erorr", error);
        }

    }

    async login({email, password})
    {
        try {
            const active = this.getUserData();
             if(active){
                this.account.deleteSessions();
                return await this.account.createEmailPasswordSession(email,password);
             }
            
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

export  const authService = new AuthService()
