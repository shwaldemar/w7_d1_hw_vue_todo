import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			items: [
				{name: "Dentist", completed: false}, {name:"Chemist", completed: true}, {name:"Sugarsnaps", purchased: false}
			],
			newItem: ""

		},
		methods: {

       saveNewItem: function() {
				 this.items.push({
					 name: this.newItem,
					 completed: false
				 });
				 this.newItem = "";
			 },

			 addItem: function(index) {
				 this.items[index].purchased = true;
			 }
    }


	});
});
