import "./App.css";
// import Item from "./components/Item";
// import ItemDate from "./components/ItemDate";
// import Card from "./components/Card";
import Products from "./components/Products";

function App() {
  // const item1 = "Nirma";

  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    { 
      id: 'p2', 
      title: 'Sirf Excel', 
      amount: 200, 
      date: new Date(2021, 2, 2) },
    {
      id: 'p3',
      title: 'Tide',
      amount: 130,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];
  return (
    <>
      {/* <Card>
      <Item name={response[0].itemName}>Hello ji mai hu appki first item</Item>
      <ItemDate date={response[0].itemDate}></ItemDate>
      <Item name={response[1].itemName}></Item>
      <ItemDate date={response[1].itemDate}></ItemDate>
      <Item name={response[2].itemName}></Item>
      <ItemDate date={response[2].itemDate}></ItemDate>
      </Card> */} 

      
      <Products items = {products}></Products>
     
    </>
  );
}

export default App;






























//   function MyButton() {
//     return (
//       <button>
//         I'm a button
//       </button>
//     );
//   }
  
//   export default function MyApp() {
//     return (
//       <div>
//         <h1>Welcome to my app</h1>
//         <MyButton />
//         <img  src="https://res.klook.com/image/upload/c_fill,w_750,h_500/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/tsah7c9evnal289z5fig.jpg"></img>
//       </div>
//     );
//   }


  // import { useState } from "react";

  // export default function MyCount() {
  //   return (
  //     <div>
  //       <h1>Counter upadate</h1>
  //       <Button1/>
  //       <br/>
  //       <Button1/>
  //     </div>
  //   );
  // }

  // function Button1() {
  //   const [count, setCount] = useState(0);

  //   function handleClick() {
  //     setCount(count + 1);
  //   }

  //   return(
  //     <button onClick={handleClick}>
  //       Clicked {count} times
  //     </button>
  //   )
  // }