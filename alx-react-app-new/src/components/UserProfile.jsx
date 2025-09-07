const UserProfile = (props) => {
    return (
        <div style={{
            border: '1px solid gray',
            padding: '12px',
            margin: '12px',
        }}>
            <h2 style={{
                color: 'blue',
                fontSize: '20px',
            }}>{props.name}</h2>
            <p>Age: <span style={{color: 'blue', fontSize:'20px', fontWeight: 'bold'}}>{props.age}</span></p>
            <p>Bio: <span style={{color: 'blue', fontSize:'20px', fontWeight: 'bold'}}>{props.bio}</span></p>
        </div>
    );
};

export default UserProfile;