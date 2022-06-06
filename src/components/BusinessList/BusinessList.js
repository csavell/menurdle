import React from 'react';
import './BusinessList.css';  //Import stylesheet
import Business from '../Business/Business'; //Import Business component


class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map(function(business){
                    return <Business business={business} key={business.id}/>;
                })};
            </div>
        )
    }
}

export default BusinessList;