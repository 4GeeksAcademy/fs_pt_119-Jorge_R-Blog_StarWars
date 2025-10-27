import { SaberMas } from "./pages/SaberMas";

export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    listas: {
      people: [],
      starships: [],
      planets: []
    },
    saberMas: {
      data: null,
      tipo: null
    },
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'set_listas':
      return {
        ...store,
        listas: action.payload
      };
    case 'set_saberMas':
      return {
        ...store,
        saberMas: action.payload
      };
    case 'set_favoritos':
      const like = store.favoritos.some(
        fav => fav.uid === action.payload.uid && fav.tipo === action.payload.tipo
      );
      return {
        ...store,
        favoritos: like
          ? store.favoritos.filter(
            fav => !(fav.uid === action.payload.uid && fav.tipo === action.payload.tipo)
          )
          : [...store.favoritos, action.payload]
      };
    default:
      throw Error('Unknown action.');

  }
}
