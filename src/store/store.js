import { createStore } from "vuex";

const store = createStore({
  state: {
    precioSabor: 0,
    precioAdorno: 0,
    precioFinal: 0,
    saboresPastel: [
      { id: 1, sabor: "chocochips", precio: 250, cantidad: 100 },
      { id: 2, sabor: "nuez", precio: 230, cantidad: 70 },
      { id: 3, sabor: "café", precio: 480, cantidad: 37 },
      { id: 4, sabor: "mora", precio: 290, cantidad: 35 },
      { id: 5, sabor: "helado", precio: 320, cantidad: 10 },
      { id: 6, sabor: "fresa", precio: 370, cantidad: 12 },
      { id: 7, sabor: "vainilla", precio: 160, cantidad: 0 },
      { id: 8, sabor: "naranja", precio: 120, cantidad: 80 },
      { id: 9, sabor: "oreo", precio: 560, cantidad: 65 },
      { id: 10, sabor: "limón", precio: 70, cantidad: 1 },
    ],
    adornosPastel: [
      { id: 0, adorno: "sin adorno", precio: 0, cantidad: 0 },
      { id: 1, adorno: "galaxia", precio: 45, cantidad: 10 },
      { id: 2, adorno: "agujero negro", precio: 60, cantidad: 10 },
      { id: 3, adorno: "roca lunar", precio: 50, cantidad: 3 },
      { id: 4, adorno: "estrellas", precio: 80, cantidad: 8 },
      { id: 5, adorno: "cohete", precio: 120, cantidad: 14 },
      { id: 6, adorno: "cometa", precio: 75, cantidad: 25 },
      { id: 7, adorno: "astronauta", precio: 95, cantidad: 15 },
      { id: 8, adorno: "sol", precio: 100, cantidad: 30 },
      { id: 9, adorno: "alienígena", precio: 130, cantidad: 1 },
    ],
    pedidos: [],
  },
  getters: {
    getFormatPrice(state) {
      state.precioFinal = state.precioSabor + state.precioAdorno;
      return new Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
      }).format(state.precioFinal);
    },
    getPrice(state) {
      state.precioFinal = state.precioSabor + state.precioAdorno;
      return state.precioFinal;
    },
    getNombreSabor: (state) => (value) => {
      const array = state.saboresPastel.filter((val) => val.id == value);
      const name = array[0]?.sabor;
      return name;
    },
    getNombreAdorno: (state) => (value) => {
      const array = state.adornosPastel.filter((val) => val.id == value);
      const name = array[0]?.adorno;
      return name;
    },
    getTotalGanancia: (state) => {
      let initialValue = 0;
      let ganancia = state.pedidos.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.precio;
      }, initialValue);
      return ganancia;
    },
  },
  mutations: {
    agregarPrecioSabor(state, value) {
      const array = state.saboresPastel.filter((val) => val.id == value);
      const precio = array[0]?.precio;
      state.precioSabor = precio;
    },
    agregarPrecioAdorno(state, value) {
      const array = state.adornosPastel.filter((val) => val.id == value);
      const precio = array[0]?.precio;
      state.precioAdorno = precio;
    },
    agregarPedido(state, information) {
      state.pedidos.push(information);
      state.precioAdorno = 0;
      state.precioSabor = 0;
    },
    actualizarCantidadSabor(state, value) {
      let array = state.saboresPastel.filter((val) => val.id == value);
      array[0].cantidad -= 1;
    },
    actualizarCantidadAdorno(state, value) {
      let array = state.adornosPastel.filter((val) => val.id == value);
      array[0].cantidad -= 1;
    },
  },

  actions: {
    agregarPrecioSabor(context) {
      context.commit("agregarPrecioSabor");
    },
    agregarPrecioAdorno(context) {
      context.commit("agregarPrecioAdorno");
    },
    agregarPedido(context) {
      context.commit("agregarPedido");
    },
    actualizarCantidadSabor(context) {
      context.commit("actualizarCantidadSabor");
    },
    actualizarCantidadAdorno(context) {
      context.commit("actualizarCantidadAdorno");
    },
  },
});

export default store;
