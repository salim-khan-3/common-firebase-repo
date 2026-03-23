import { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
// import {AuthContext} from "../../Context/AuthContext/AuthContext"

const Home = () => {
    const Info = use(AuthContext)
    console.log(Info);
    return (
        <div>
            djkfkd
        </div>
    );
};

export default Home;