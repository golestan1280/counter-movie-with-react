
// @@@@@@@@@@@@@@passing children******************************


import React, { Component } from "react";
class Counter extends Component {
  state = {
    // count: 0
    //در پدرش پراپس ولیو را پاس میدهیم برای فرزند 
    // پس برای فرزند باید قسمت استیت ها، مقداردهی اولیه شود مقادیر با پراپس هایی که از پدر آمده
    // count:this.props.value
      value:this.props.value

  };

  handleIncrement =() =>{
      this.setState({ value: this.state.value +1})      
  };

  render() {
    return (
      <div>
      {/* روش دیگه اینه که بصورت پراپس پاس داده بشه و دریافت مقدار بشه */}
        <p>@$@{this.props.id}</p>
        {/* پاس با چیلدرن */}
        {/* {this.props.children} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button 
            onClick={this.handleIncrement} 
            className="btn btn-secondary btn-sm"
        >
            Increment
        </button>
        
      </div>
    );
  }

  // قبل از ریترن، دو خط اول این تابع را تعریف کردیم سپس انتخاب کردیم کلیک راست، گزینه ریفکتور
  // سپس اسم متد را مینویسیم با اینکار کد تمیز میشه
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;


// @@@@@@@@@@@@@@ passing data to component********************************

// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     // count: 0
//     //در پدرش پراپس ولیو را پاس میدهیم برای فرزند 
//     // پس برای فرزند باید قسمت استیت ها، مقداردهی اولیه شود مقادیر با پراپس هایی که از پدر آمده
//     // count:this.props.value
//       value:this.props.value

//   };

//   handleIncrement =() =>{
//       this.setState({ value: this.state.value +1})      
//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button 
//             onClick={this.handleIncrement} 
//             className="btn btn-secondary btn-sm"
//         >
//             Increment
//         </button>
        
//       </div>
//     );
//   }

//   // قبل از ریترن، دو خط اول این تابع را تعریف کردیم سپس انتخاب کردیم کلیک راست، گزینه ریفکتور
//   // سپس اسم متد را مینویسیم با اینکار کد تمیز میشه
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.value === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { value: count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     count: 0, 
//     tags: ['tag1' , 'tag2' ,'tag3']

//   };

//   renderTags(){
//       if(this.state.tags.length===0) return <p>There are no tags!</p>;
//       return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;            
        
//   }

//   render() {
//     return (
//       <div>
//           {this.state.tags.length ===0 && "Please create a new tag!"}
//           {this.renderTags()}
       
//       </div>
//     );
//   }

  
// }

// export default Counter;


// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// import React, { Component } from "react";
// class Counter extends Component {
//   state = {
//     count: 0, 
//     tags: ['tag1' , 'tag2' ,'tag3']

//   };

//   render() {
//     return (
//       <div>
//         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button>Increment</button>
//         <ul>
//             {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
//             {/* <li>{this.state.tags[0]}</li>
//             <li>{this.state.tags[1]}</li>
//             <li>{this.state.tags[2]}</li> */}
//         </ul>
//       </div>
//     );
//   }

//   // قبل از ریترن، دو خط اول این تابع را تعریف کردیم سپس انتخاب کردیم کلیک راست، گزینه ریفکتور
//   // سپس اسم متد را مینویسیم با اینکار کد تمیز میشه
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero" : count;
//   }
// }

// export default Counter;
