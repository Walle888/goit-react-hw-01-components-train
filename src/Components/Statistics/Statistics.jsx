import React from "react";
import PropTypes from "prop-types";
import statisticalData from "../../date/statistical-data.json"
import { Card, Title, StatList, StatItem, StatLabel, StatPercentage } from "../Statistics/Statistics.styles";

const Statistics = () => {
    return (
        <Card>
           <Title>Upload stats</Title>
            <StatList>
                {statisticalData.map(({ id, label, percentage }) => (
                    <StatItem key={id}>
                        <StatLabel>{label}</StatLabel>
                        <StatPercentage>{percentage}%</StatPercentage>
                    </StatItem>
                ))}
            </StatList>
        </Card>
    );
}
    Statistics.defaultProps = {
        title: '',
    };

    Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            }),
        ).isRequired,
    };

    export default Statistics;
