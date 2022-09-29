import { ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";

export default function ContaConfig(){
    return(
        <ProtectedLayoutPrivatePageUser>
            <div>
                <h1 className="text-3xl text-black font-bold text-center">Em Breve!</h1>
            </div>
        </ProtectedLayoutPrivatePageUser>
    )
}