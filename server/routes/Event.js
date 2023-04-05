//server\routes\Event.js
class Event {
    constructor(id, title, location, date, cost, image, organizer_id) {
      this.id = id;
      this.title = title;
      this.location = location;
      this.date = date;
      this.cost = cost;
      this.image = image;
      this.organizer_id = organizer_id;
    }
  }
  
  module.exports = Event;
