// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('remove', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.empty();
    // this.collection.map(this.renderEntry, this);
    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
    //return this.$el;
  }

//   renderEntry: function(entry) {
//     var entryView = new SongQueueEntryView({model: entry});
//     this.$el.append(entryView.$el);
//   }

});
