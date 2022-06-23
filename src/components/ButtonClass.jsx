import React, { Component } from "react";

// class ButtonClass extends Component {
//     // constructor(props) {
//     //     super (props);
//     // }
    
//     render() {
//         const {text} = this.props;

//         return <button> {text ? text : "Default"} </button>
//     }
// }

class ButtonClass extends Component {
    // constructor(props) {
    //     super (props);
    // }

    render() {
        return (
            <button>
                {/* Di sini kita menggunakan ternary operator untuk default value */}
                {this.props.text ? this.props.text : 'Default Button Class'}
            </button>
        )
        // return <button> {this.props.text} </button>;
      }
    }
    
//     render() {
//         const {text} = this.props;

//         return <button> {text} </button>
//     }
// }

// ButtonClass.defaultProps = {
//     text: "Default"
// }

export default ButtonClass;