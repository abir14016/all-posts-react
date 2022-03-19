import React, { useState } from 'react';

const Booster = () => {
    const [follower, setFollower] = useState(1)
    const boosFollower = () => setFollower(follower + 1)
    const downFollower = () => setFollower(follower - 1)
    return (
        <div>
            <h3>follower: {follower}</h3>
            <button onClick={boosFollower}>+</button>
            <button onClick={downFollower}>-</button>
        </div>
    );
};

export default Booster;