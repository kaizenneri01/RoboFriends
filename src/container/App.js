import React ,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './app.css';
import Scroll from '../components/Scroll';


class App extends Component {
    constructor(){
        super()
        this.state = {
            robot:[],
            searchfield: ''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
        this.setState({robot : users})
    });
    
}


    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value}) 
    }

    render() { 
        const {robot , searchfield} = this.state;
        const changeFilter = robot.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        
        return(
        <div className='tc'>
        <h1>ROBOFRIENDS</h1>           
        <SearchBox SearchChange ={this.onSearchChange}/>
        <Scroll>
        <CardList robot={changeFilter}/>
        </Scroll>
        </div>
        );
    }
    
}
export default App;

