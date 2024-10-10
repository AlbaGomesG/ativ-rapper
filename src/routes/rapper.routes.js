import { Router } from "express";

const rapperRoutes = Router();

// Array com planetas pré-cadastrados

let planetas = [
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Mariah Carey",
    idade: 55,
    descricaoFisica: ['Loira', 'Cabelo longo', 1.75, 'Cantora-compositora'],
    envolvimento : true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Will Smith",
    temperatura: 56,
    descricaoFisica: ['Moreno', 'Cabelo curto', 1.88 , 'Ator'],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Michael Jackson",
    temperatura: 50,
    descricaoFisica: ['Moreno', 'Cabelo longo', 1.75, 'Cantor-compositor e dançarino'],
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Jay-Z",
    temperatura: 54,
    descricaoFisica: ['Moreno', 'Cabelo curto', 1.88 , 'Rapper-compositor'],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Justin Bieber",
    temperatura: 30,
    descricaoFisica: ['Loiro', 'Cabelo curto', 1.75 , 'Cantor-compositor'],
    envolvimento: false,
  },
]