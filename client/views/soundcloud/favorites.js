var DataHelpers = {
	getTrackData : function(id){
		return _.find(Soundcloud.getFavorites(), function(f){
			return f.id === id;
		});
	}
};

Template['sc-favorites'].favorites = function(){
	return Soundcloud.getFavorites();
};

Template['sc-favorites'].events = {
	'click .add-button' : function(event, template){
		var id = $(event.currentTarget).data('id');

		postal.publish({
			topic : 'track.addtoplaylist',
			data : DataHelpers.getTrackData(id)
		});
	}
};