// @@@@@@@@@@@@@@passing children********************************

import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters:[
            {id:1, value: 4},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ]
     };

    render() { 
        return ( 
            <div>
                {
                    this.state.counters.map(counter => 
                    <Counter key={counter.id} value={counter.value} id={counter.id}>
                        {/* <h4>Title</h4> */}
                        {/* روش زیر برا اینه که سمت فرزند بصورت چیلدرن پاس داده بشه */}
                        {/* <h4>Counter #{counter.id}</h4> */}
                    </Counter>
                        )
                }
            </div> 
            );
    }
}
 
export default Counters;


// @@@@@@@@@@@@@@@@passing data to component*************************

// import React, { Component } from 'react';
// import Counter from './counter';

// class Counters extends Component {
//     state = { 
//         counters:[
//             {id:1, value: 4},
//             {id:2, value: 0},
//             {id:3, value: 0},
//             {id:4, value: 0}
//         ]
//      };

//     render() { 
//         return ( 
//             <div>
//                 {
//                     this.state.counters.map(counter => 
//                     <Counter key={counter.id} value={counter.value} />)
//                 }
//             </div> 
//             );
//     }
// }
 
// export default Counters;