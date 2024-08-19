// import React, { useId } from 'react'
// function useFormIds(){
//     const baseId = useId()
//     return{
//         usernameId:`${baseId}-username`,
//         passwordId:`${baseId}-password`,
//     }
// }
// const UseId = () => {
//     // const userNameid = useId()
//     // const passwordId = useId()
//     const {usernameId,passwordId} = useFormIds()
//   return (
//     <div>
//         <form>
//             <div>
//                 <label htmlFor={usernameId}>UserName:</label>
//                 <input type="text" id={usernameId} name="username" />
//             </div>
//             <div>
//                 <label htmlFor={passwordId}>Password:</label>
//                 <input type="password" id={passwordId} name="password" />

//             </div>
//             <div>
//                 <button type="submit">Login</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default UseId


import React, { useId } from 'react'
function ItemList({items}){
    const baseId = useId()
    return(
        <div>
            {items.map((item,index)=>(
                <div key={baseId + '-' + index}>
                    <label htmlFor={`${baseId}-${index}`}>{item.label}</label>
                    <input type="text" id={`${baseId}-${index}`}/>
                </div>
            ))

            }
        </div>
    )

}
const items = [
    {label:"name",value:"value 0"},
    {label:"email",value:"value 1"},
    {label:"password",value:"value 2"},
]
const UseId = () => {
  return (
   <ItemList items={items}/>
  )
}

export default UseId
