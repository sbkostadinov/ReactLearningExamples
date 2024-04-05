const reactDescriptions = ['Fundamental', 'Crucial', 'Foundational']

function getRadnomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}



function App() {
    const  description = reactDescriptions[getRadnomInt(2)]
    return (
        <div>
            <header>    
                <img src="src/assets/react-core-concepts.png" alt="Sttylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {description} Fundamental React concepts you will need for almost any application you build
                </p>
            </header>
        </div>
    );
}
export default App;