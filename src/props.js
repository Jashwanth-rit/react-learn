import React from 'react';

function Props(name){
    return (
        <div>
            <h1>hello {name.n}</h1>
            <h2>email {name.email}</h2>
            <button onClick = {name.data}>click here</button>
        </div>
    )
}
export default Props;