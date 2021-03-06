import React, { Component } from 'react';
import Event from './Event.js';

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = { events: this.props.data };
  }

  render() {
    return (
      <div className="col-xs-4 eventList">
        <section>
          <div className="events-header"></div>
          {this.props.data.map((event, i) =>
            <Event key={i} data={event} />
          )}
        </section>
      </div>
    );
  }
}

EventList.propTypes = { data: React.PropTypes.array.isRequired };

export default EventList;
