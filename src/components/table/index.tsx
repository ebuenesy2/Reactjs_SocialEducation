import "./index.css"

export const Index =(props: any) => {
  console.log("proops:",props);

    
  return (
        <div className='list'>
             <h1 className='title'>  Sabit </h1>
             <p> {props.title} </p>
        </div>
    
  )
}

export default Index;
