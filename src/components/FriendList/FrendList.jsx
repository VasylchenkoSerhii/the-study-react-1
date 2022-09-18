import FrendListItem from "./FriendListItem/FrendListItem";
import { Box } from "components/Box/Box";

const FriendList = ({ friends }) => {
    return (
        <Box as='section' pt='5' pb='5'>
            <Box
                as='ul'
                maxWidth={500}
                ml='auto'
                mr='auto'
                fontSize='l'
                color='text'
            >
                <FrendListItem friends={friends} />
            </Box>
        </Box>
    );
};


export default FriendList;
