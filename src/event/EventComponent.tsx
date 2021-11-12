import { useState } from "react";

const EventsComponent: React.FC = () => {
    const [x, setX] = useState(0);
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
        setX(event.screenX);
    };

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>
                Drag me!
            </div>
            <div>x: {x}</div>
        </div>
    );
};

export default EventsComponent;
