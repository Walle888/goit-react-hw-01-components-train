import React from "react";
import PropTypes from "prop-types";
import { Card, Descriptions, Image, Name, Tag, Location, StatsList, StatsItem, StatsLabel, StatsQuality} from "../Profile/Profile.styles"


const Profile = ({ name, tag, location, avatar, stats}) => {
    return (
        <Card>
            <Descriptions>
                <Image
                    src={avatar}
                    alt="Аватар пользователя"
                />
                <Name>{name}</Name>
                <Tag>{tag}</Tag>
                <Location>{location}</Location>
            </Descriptions>

            <StatsList>
                <StatsItem>
                    <StatsLabel>follovers</StatsLabel>
                    <StatsQuality>{stats.followers}</StatsQuality>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuality>{stats.views}</StatsQuality>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuality>{stats.likes}</StatsQuality>
                </StatsItem>
            </StatsList>
        </Card>
    )
}

// Profile.defaultProps = {

// }

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};

export default Profile;
