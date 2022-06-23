// // // import logo from './logo.svg';
// import './App.css';
// import ButtonClass from "./components/ButtonClass";
// import ButtonFunction from "./components/ButtnFunction";

// function App() {
//   // const favoriteFood = ['Matcha', 'Cheese', 'strawberry'];
//   return (
//        /*
//     <ButtonClass />
//     <ButtonFunctional />

//     ketika kita menggunakan ini saja,
//     akan muncul error: JSX expressions must have one parent element.

//     Hal ini dikarenakan untuk seluruh JSX Component
//     HANYA boleh ada satu element root utama,
//     untuk mensolusikan ini, kita bungkus kedua button tersebut
//     dengan sebuah div lagi
//   */

//     // supaya seru dikit kita tambahkan styling
//     // perhatikan di sini stylenya pun ditulis dengan
//     // the javascript way !

//     // style di sini sebenarnya menerima object
//     // karena di JSX ekspresi harus ditulis dengan kurung kurawal {}
//     // sehingga untuk bisa menerima object kita harus menulis
//     // kurung kurawal 2x {{ }}
//     // pertama untuk JSX, kedua untuk object
//     <div>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: '0.5em',
//           marginBottom: '0.5em',
//         }}
//       >
//         <ButtonClass text="Button Class" />
//         <ButtonFunction text="Button Functional" />
//       </div>
//       <div
//         style={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: '0.5em',
//           marginBottom: '0.5em',
//         }}
//       >
//         {/* Perhatikan di sini kita tidak membuat props textnya */}
//         <ButtonClass />
//         <ButtonFunction />
//       </div>
//     </div>
//   );
// }


//     // <div className="App">
//     //   <h1>Hello React</h1>
//     //   <p>My Favorite Food</p>
//     //   <ul>
//     //     {
//     //       favoriteFood.map((food) => {
//     //         return <li key={food}> {food} </li>
//     //       })
//     //     }
//     //     {/* <li>{favoriteFood[0]} </li>
//     //     <li> {favoriteFood[1]} </li>
//     //     <li> {favoriteFood[2]} </li> */}
//     //   </ul>
//     //   <div style={{ marginLeft: "20px"}}>
//     //     <ButtonClass 
//     //     text="I'm Button Class from props"

//     //      />
//     //     <ButtonFunction 
//     //     text="I'm Button Function from props"
//     //     color="blue"/>
//     //   </div>
        
//     //   {
//     //     <p> {favoriteFood[0]} </p>
//     //   }
//     //   {/* <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header> */}
//     // </div>
// //   );
// // }

// export default App;


// // import './App.css';
// // import Header from './components/Header';
// // import Contact from './components/Contact';

// // // Uncomment untuk memuat daftar kontak
// // import contacts from './data/contacts.json';

// // const App = () => {
// //   // Masukkan Header dan Contact ke dalam div App
// //   return (
// //     <div className="App">
// //       <Header />
// //       {
// //         contacts.map((contact) => {
// //           return (
// //             <Contact key={contact.phone} data={contact} />
// //           )
// //         })
// //       }    
// //     </div>
// //   );
// // }

// // export default App;


// import './App.css';
// import Header from './components/Header';
// import Contact from './components/Contact';

// // Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

// const App = () => {
//   // Masukkan Header dan Contact ke dalam div App
//   return (
//     <div className="App">
//       <Header />
      // {
      //   contacts.map((contact) => {
      //     return (
      //       <Contact key={contact.phone} data={contact} />
      //     )
      //   })
      // }    
//     </div>
//   );
// }

// export default App;

import './App.css';

import React from 'react';
import contacts from './data/contacts.json';
import Contact from './components/Contact';
import Header from './components/Header';
import ToDo from './containers/ToDo';

const App = () => {
  return (
    <div className="App">
      <ToDo />
      <Header />
      {
        contacts.map((contact) => {
          return (
            <Contact key={contact.phone} data={contact} />
          )
        })
      }    

    </div>
  );
}

export default App;


