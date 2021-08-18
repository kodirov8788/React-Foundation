import React from 'react'

function Hello() {
    // return (
    //     <div>
    //         <h1>Hello Ali</h1>
    //     </div>
    // )

    return React.createElement('div', { id: 'hello', className: "salom" }, React.createElement('h1', null, 'salom'))

}

export default Hello
