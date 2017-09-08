class Stopwatch extends React.Component {
    constructor() {
        super();
        this.state = {
            running = false,
            display = '.stopwatch'
            print: this.format(this.times),
        };
    }
    		
    	}
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 10);
        }
    }

    step() {
        if (!this.running) {
            return;
        }
        
        this.calculate();
        this.print();
    }

    calculate() {
        this.times.miliseconds += 1;

        if (this.times.miliseconds >= 100) {
            this.times.seconds += 1;
            this.times.miliseconds = 0;
        }

        if (this.times.seconds >= 60) {
            this.times.minutes += 1;
            this.times.seconds = 0;
        }
    }
    
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
}

    render() {
		return (
			<div>
				<nav className="controls">
						<button onClick={(e) => this.start(e)}>Start</button>
                        <button onClick={(e) => this.stop(e)}>Stop</button>
                </nav>
				<div className="stopwatch">{this.state.}</div>
				    {this.format(this.state.times)}				
			</div>
		);
	}
}

function pad0(value) {
    let result = value.toString();
    
    if (result.length < 2) {
        result = '0' + result;
    }

    return result;
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app')); 