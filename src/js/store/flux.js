const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      planets: [],
	  hola: "hola",
	  planet: [],
	  character: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((resp) => resp.json())
          .then((resp) => setStore({ characters: resp.results }))
          .catch((error) => console.log(true));

        /* Traemos a los planetas */

        fetch("https://www.swapi.tech/api/planets/")
          .then((resp) => resp.json())
          .then((resp) => setStore({ planets: resp.results }))
          .catch((error) => console.log(true));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
	  verPersona: (id) => {
		let link = "https://www.swapi.tech/api/people/" + id
		//fetch(link)
		/*.then((resp) => resp.json())
		.then((resp) => setStore({ characters: resp.results }))
		.catch((error) => console.log(true));*/
	  },
    },
  };
};

export default getState;
