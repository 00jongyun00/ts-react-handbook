import ReactDOM from "react-dom";
import EventsComponent from "./event/EventComponent";

const App = () => {
    return (
        <div>
            <EventsComponent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
