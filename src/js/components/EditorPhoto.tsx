import React from "react";
import Draggable from "react-draggable";
import {CardList} from './CardList'
import imgAdd from '../../assets/img/ic_add_white.svg'
import { Card } from "./Card";

class EditorPhoto extends React.Component {
  state = {
    cards: [1],
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };
  handleCards = () => {
    this.setState({
      cards:[...this.state.cards, 1]
    })
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
   
    this.setState({ activeDrags: --this.state.activeDrags });
  };
  onDrop = (e) => {
    this.setState({ activeDrags: --this.state.activeDrags });
    if (e.target.classList.contains("drop-target")) {
      alert("Dropped!");
      e.target.classList.remove("hovered");
    }
  };
  onDropAreaMouseEnter = (e) => {
    if (this.state.activeDrags) {
      e.target.classList.add("hovered");
    }
  };
  onDropAreaMouseLeave = (e) => {
    e.target.classList.remove("hovered");
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop, onMouseDown: (e) => e.preventDefault() };
    const { deltaPosition, controlledPosition } = this.state;
    return (
      <>
      

        {/* <Draggable {...dragHandlers}>
          <div className="edit">
            I can only be moved within the confines of the body element.
          </div>
        </Draggable> */}
        
        <CardList dragHandlers={dragHandlers} cards={this.state.cards}/>
        <div className="card-user__add-button" onClick={this.handleCards}>
                  <button className="card-user__add-btn"> <img src={imgAdd} alt="" /> <span
                      className="card-user__btn-text">Добавить ещё</span> </button>
                </div>
      </>
    );
  }
}

export { EditorPhoto };

//   class RemWrapper extends React.Component {
//     // PropTypes is not available in this environment, but here they are.
//     // static propTypes = {
//     //   style: PropTypes.shape({
//     //     transform: PropTypes.string.isRequired
//     //   }),
//     //   children: PropTypes.node.isRequired,
//     //   remBaseline: PropTypes.number,
//     // }

//     translateTransformToRem(transform, remBaseline = 16) {
//       const convertedValues = transform.replace('translate(', '').replace(')', '')
//         .split(',')
//         .map(px => px.replace('px', ''))
//         .map(px => parseInt(px, 10) / remBaseline)
//         .map(x => `${x}rem`)
//       const [x, y] = convertedValues

//       return `translate(${x}, ${y})`
//     }

//     render() {
//       const { children, remBaseline = 16, style } = this.props
//       const child = React.Children.only(children)

//       const editedStyle = {
//         ...child.props.style,
//         ...style,
//         transform: this.translateTransformToRem(style.transform, remBaseline),
//       }

//       return React.cloneElement(child, {
//          ...child.props,
//          ...this.props,
//          style: editedStyle
//       })
//     }
//   }
