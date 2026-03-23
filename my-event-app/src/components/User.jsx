// import { use } from "react";

// const User = ({fetchPromise}) => {
//     // console.log(fetchPromise);
//     const userData = use(fetchPromise);
//     console.log(userData);
//     return (
//         <div>
//             <h1>hello world</h1>
//             {
//                 userData.map((data)=>{
//                     <div key={data.id} className="w-[500px] h-[500px]">
//                         <div>
//                             <img src={data.thumbnailUrl} alt="" />
//                         </div>
//                     </div>
//                 })
//             }
//         </div>
//     );
// };

// export default User;


import { use } from "react";

const User = ({ fetchPromise }) => {
  const userData = use(fetchPromise); // Suspense + use() hook
  console.log(userData);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Photos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {userData.map((data) => (
          <div key={data.id} className="border rounded shadow p-2">
            <h1>{data.name}</h1>
            <h2 className="text-sm mt-2">{data.email}</h2>
             <p>{data.body}</p>
             
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
