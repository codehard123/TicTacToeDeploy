import React from "react"
import './App.css'
import Box from "./Box"
class App extends React.Component{
	constructor() {
		super()
		this.state = {
			array:[null,null,null,null,null,null,null,null,null],
			startPlayer:null,
			winner:null
		}
	}
	setPlayer=(player)=>{
		this.setState(
			{ startPlayer:player }
		)
		this.disableButtons()
	}
	disableButtons(){
		document.getElementById("b1").style.disabled=true;
		document.getElementById("b2").style.disabled=true;
		
	}
	changeState=(index)=>{
		const array=this.state.array;
		const newarray=array;
		newarray[index]=this.state.startPlayer;
		this.setState({
			array:newarray
		})
		console.log(this.state.array)
		this.tooglePlayer();
		this.checkWin();
	}
	checkWin() {
		let winningPermutations=[[0,1,2],[3,4,5],[6,7,8],[0,2,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
		
		for(var i=0;i<8;i++)
		{
			const [a,b,c]=winningPermutations[i]
			console.log(a,b,c)
			console.log(this.state.array[a],this.state.array[b],this.state.array[c])
			if((this.state.array[a]!=null) && ((this.state.array[b]!=null)) &&((this.state.array[c]!=null))&&(this.state.array[a]==this.state.array[b])&&(this.state.array[a]==this.state.array[c]))
			{
				
				alert(`Winner is ${this.state.array[a]}`)
			}
		}
	}
	
	tooglePlayer(){
		if(this.state.startPlayer=="X")
		{
			this.setState({startPlayer:"O"})
		}
		else
		{
			this.setState({startPlayer:"X"})
		}
	}
	render(){
		return(
			<div>
			
			<div className="container">
				<div className="row">
				<span onClick={()=>this.changeState(0)}>
				<Box array={this.state.array} index="0"></Box>
				</span>
				<span onClick={()=>this.changeState(1)}>
				<Box array={this.state.array} index="1"></Box>
				</span>
				
				<span onClick={()=>this.changeState(2)}>
				<Box array={this.state.array} index="2"></Box>
				</span>
				
				</div>
				<div className="row">
				<span onClick={()=>this.changeState(3)}>
				<Box array={this.state.array} index="3"></Box>
				</span>
				<span onClick={()=>this.changeState(4)}>
				<Box array={this.state.array} index="4"></Box>
				</span>
				
				<span onClick={()=>this.changeState(5)}>
				<Box array={this.state.array} index="5"></Box>
				</span>
				
				</div>
				<div className="row">
				<span onClick={()=>this.changeState(6)}>
				<Box array={this.state.array} index="6"></Box>
				</span>
				<span onClick={()=>this.changeState(7)}>
				<Box array={this.state.array} index="7"></Box>
				</span>
				
				<span onClick={()=>this.changeState(8)}>
				<Box array={this.state.array} index="8"></Box>
				</span>
				
				</div>
			</div>
			</div>
		)
	}
}
export default App;