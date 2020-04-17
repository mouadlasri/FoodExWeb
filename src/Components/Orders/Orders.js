import React from 'react';

// Icons
import MoreVertIcon from '@material-ui/icons/MoreVert';


class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ paddingLeft: 30, paddingRight: 30 }}>
                <div className="page-title">
                    <MoreVertIcon className="page-title-icon">Dashboard</MoreVertIcon>
                    <h3>Orders</h3>
                </div>
            </div>
        )
    }
}

export default Orders;