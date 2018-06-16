import React from 'react';
import autoBind from '../../utils/utils';

class Game extends React.Component {
  constructor(props) {
    super(props);
    autoBind.call(this, Game);
  }
  componentDidMount() {
    const { canvas } = this.refs;
    const ctx = canvas.getContext('2d');
    const numberOfDoodads = 5;

    for (let i = 0; i < numberOfDoodads; i++) {
      let xCoord = Math.random() * 510;
      let yCoord = Math.random() * 510;
      ctx.fillStyle = 'blue';
      ctx.fillRect(xCoord, yCoord, 50, 50);
    }
  }

  handleClick(event) {
    event.preventDefault();
    const { canvas } = this.refs;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const coordinates = `X coords: ${x}, Y coords: ${y}`;

    console.log(`CANVAS CLICKED AT ${coordinates}`);
  }

  render() {
    return (
      <div className='game'>

        <canvas
          ref='canvas'
          width={560}
          height={560}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Game;
