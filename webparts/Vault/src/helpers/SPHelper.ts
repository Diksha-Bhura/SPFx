import { WebPartContext } from "@microsoft/sp-webpart-base";
import { sp } from "@pnp/sp/presets/all";

export class SPHelpers{
    public static GetVault = (context: WebPartContext): Promise<any>  => {
        return new Promise(async (resolve, reject) => {
            try{
                let result = await sp.web.lists.getByTitle("Vaults").items();
                resolve (result);
            }
            catch(e){
                reject(e);
            }
        })
    }

    public static ProcessVaults = (data:any[]):Promise<any> => {
        return new Promise((resolve, reject) => {
            try
            {
                for(let index = 0; index<data.length; index++)
                {
                    //Check if it is parent or not
                    //if Parent, add it in group list
                    //else, add it in item list.
                }
            }
            catch(e){
                console.log("Error while processing list items.")
            }
        })
    }
}


