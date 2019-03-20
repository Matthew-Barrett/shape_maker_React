class Shape extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
		  size: 100,
		  perCent: 50,
		  bgColor: colors[Math.floor(Math.random()*colors.length)]
		};
	}
    
	componentDidMount() {
		this.tickTock = setInterval(
			() => this.clockTick(),
			1000
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.tickTock);
	}
	
	clockTick() {
		this.setState({
			size: Math.floor(Math.random() * 125) + 1,
			perCent: Math.floor(Math.random() * 100) + 1,
			bgColor: colors[Math.floor(Math.random()*colors.length)]
		});
	}

	render() {
		var shapeStyle = {
			padding: 10,
			margin: 20,
			display: "inline-block",
			backgroundColor: this.state.bgColor,
			borderRadius: this.state.perCent,
			width: this.state.size,
			height: this.state.size
		};
		
		return (
			<span style={shapeStyle}>
			</span>
		);
	}
};

var colors = ["#77b3d1", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552",
              "#A40E4C", "#85AFC0", "#296573", "#AA8552", "#CC0E4C", "#567187", "#c6c976",
              "#967c64", "#e497ed", "#d24cff", "#e2ceb1", "#cc999e", "#97bf9a"];

var renderData = [];

for (var i = 0; i < 60; i++) {
	renderData.push(<Shape key={i}/>);
}

var destination = document.querySelector("#container");

ReactDOM.render(
	<div>
		{renderData}
	</div>,
	destination
);