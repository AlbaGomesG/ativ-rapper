import { Router } from "express";

const rapperRoutes = Router();

// Array com suspeitos cadastrados

let suspeitos = [
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Mariah Carey",
    idade: 55,
    descricaoFisica: ["Loira", "Cabelo longo", 1.75, "Cantora-compositora"],
    envolvimento : true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Will Smith",
    idade: 56,
    descricaoFisica: ["Moreno", "Cabelo curto", 1.88 , "Ator"],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Michael Jackson",
    idade: 50,
    descricaoFisica: ["Moreno", "Cabelo longo", 1.75, "Cantor-compositor e dançarino"],
    envolvimento: false,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Jay-Z",
    idade: 54,
    descricaoFisica: ["Moreno", "Cabelo curto", 1.88 , "Rapper-compositor"],
    envolvimento: true,
  },
  {
    id: Math.floor(Math.random() * 9999),
    nome: "Justin Bieber",
    idade: 30,
    descricaoFisica: ["Loiro", "Cabelo curto", 1.75 , "Cantor-compositor"],
    envolvimento: false,
  },
]

// Rota para buscar todos os elementos do array suspeitos
rapperRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos);
});

// Rota para cadastrar um novo suspeito
rapperRoutes.post("/", (req, res) => {
  const { nome, idade, descricaoFisica, envolvimento } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !idade || !descricaoFisica || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade, descricaofisica e envolvimento são obrigatórios!",
    });
  }

  // Validação de existência de envolvimento
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 9999),
    nome,
    idade,
    descricaoFisica,
    envolvimento: envolvimento|| [],
  };

  // Adiciona o novo suspeito ao array de rapperRoutes
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

export default rapperRoutes;