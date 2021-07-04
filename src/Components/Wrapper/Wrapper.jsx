import React from "react";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";

import statisticalData from "../../date/statistical-data.json"
import user from "../../date/user.json";
import { Container } from "./Wrapper.styles";

const Wrapper = () => {
    return (
        <Container>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics
                title={statisticalData.title}
                stats={statisticalData.stats}
/>
         </Container>
    )
}

export default Wrapper;