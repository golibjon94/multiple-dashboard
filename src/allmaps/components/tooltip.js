import React,{useState,useRef} from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipComponent() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
          Click me!
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              My Tooltip
               My Tooltip
                My Tooltip
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
  
  export default TooltipComponent;