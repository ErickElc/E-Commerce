import { useParams } from "react-router-dom"
import { ProtectedLayoutPrivatePageUser } from "../../components/protectedLayout/ProtectedLayout";

export default function ContaConfig(){
    const id = useParams();
    return(
        <ProtectedLayoutPrivatePageUser>
            <div>
                Em Breve!
            </div>
        </ProtectedLayoutPrivatePageUser>
    )
}