// import myButton from './components/myButton'
function myButton(){
  const handleclick = () =>{
    return alert("iam clicked!")
  }
  return (
  <button onClick={handleclick}>button</button>
  )
}

export default function app(){
 const name = 2+2;
return(
  <div>
    <h2>{name}</h2>
    <myButton />
      
    </div>
)
}