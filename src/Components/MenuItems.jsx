import React, { Component } from 'react';
import './MenuItems.css';

class RenderCommand extends Component {
    constructor(){
        super();
        this.state = {
            menu: []
        }
    }

    
    componentDidMount(){ 
        fetch('https://gdl003-burger-queen-back-end.engkarinacabrera.now.sh/products')
                .then(data => data.json())
                .then(data => {
                    let arr= [];
                    let keac= () =>{
                        data.products.forEach((element) => {
                           arr.push(element)                        
                      }); console.log(arr)                   
                        return arr;
                      }
                      keac()

                    this.setState({
                        menu: arr 
                          })
                      })
                    }  
                    
                     
         


    render() {
        const command = this.state;
        
        console.log(command)
        

        return (
            <div className="menuItems">
              <p>Aquí van los botones de lo que hay en mi menú</p>
              {command.menu.map((command, key)=>(
                <button key={key} className= 'button'>{command.name}</button> 
              ))
              } 
            </div>
            
        
        )
}
}
export default RenderCommand;