export default function Card(props){
    return (
        <div>
                <section id="card">
                   <p>{props.name}</p>
                   <p>{props.children}</p>
                </section>
        </div>
        
    );                              
}