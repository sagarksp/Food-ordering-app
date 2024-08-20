*food app

/* Components of Our Food-Order App
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search Bar
 * - Restaurant-Container
 *  - Restaurant-Card
 *    - Img
 *    - Name of Res, Star Rating, cuisine, delivery time.
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */


 // useState([
//     {
//       type: 'restaurant',
//       data: {
//         id: '334475',
//         name: 'KFC',
//         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//         cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//         costForTwo: 40000,
//         deliveryTime: 29,
//         avgRating: '3.8',
//       },
//     },
//     {
//       type: 'restaurant',
//       data: {
//         id: '334476',
//         name: 'Dominos',
//         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//         cuisines: ['Biryani', 'American', 'Snacks', 'Fast Food'],
//         costForTwo: 40000,
//         deliveryTime: 36,
//         avgRating: '4.8',
//       },
//     },
//     {
//       type: 'restaurant',
//       data: {
//         id: '334477',
//         name: 'McDonals',
//         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
//         cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
//         costForTwo: 40000,
//         deliveryTime: 36,
//         avgRating: '4.2',
//       },
//     },
//   ]);

    // let restaurant2 = [
    //     {
    //       type: 'restaurant',
    //       data: {
    //         id: '334475',
    //         name: 'KFC',
    //         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //         cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //         costForTwo: 40000,
    //         deliveryTime: 36,
    //         avgRating: '3.8',
    //       },
    //     },
    //     {
    //       type: 'restaurant',
    //       data: {
    //         id: '334476',
    //         name: 'Dominos',
    //         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //         cuisines: ['Biryani', 'American', 'Snacks', 'Fast Food'],
    //         costForTwo: 40000,
    //         deliveryTime: 36,
    //         avgRating: '4.8',
    //       },
    //     },
    //     {
    //       type: 'restaurant',
    //       data: {
    //         id: '334477',
    //         name: 'McDonals',
    //         cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
    //         cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
    //         costForTwo: 40000,
    //         deliveryTime: 36,
    //         avgRating: '4.2',
    //       },
    //     },
    //   ];
   
   
    // filtering function 
    // const filterList = ()=>{
    //     (restaurantCard.filter(
    //         (res) = res.data.avgRating>4)
    //     )}
    //     console.log(rees)













     {/* // * or */}

{/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, z  but is not a recommended practice - react official Docs declared this/}

{resList.map((restaurant, index) => (
<RestaurantCard key={index} resData={restaurant} />
))}

{/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
         */}


                {/* <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/>
                <RestaurantCard resData={resList[11]}/>
                <RestaurantCard resData={resList[7]}/>
                <RestaurantCard resData={resList[8]}/>
                <RestaurantCard resData={resList[9]}/>
                <RestaurantCard resData={resList[10]}/> */}
