import { Router } from "express";

const rapperRoutes = Router();

// Array com suspeitos cadastrados

let suspeito = [
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

// Rota para buscar todos os elementos do array suspeito
rapperRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeito);
});

// Rota para cadastrar um novo suspeitos
rapperRoutes.post("/", (req, res) => {
  const { nome, idade, descricaoFisica, envolvimento } = req.body;

  // Validação dos campos obrigatórios
  if (!nome || !idade || !descricaoFisica || !envolvimento) {
    return res.status(400).json({
      message: "Os campos nome, idade, descricaofisica e envolvimento são obrigatórios!",
    });
  }

  // Validação de envolvimento
  if (envolvimento != "sim" && envolvimento != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'!",
    });
  }

  // Criação de um novo suspeito
  const novosuspeito = {
    id: Math.floor(Math.random() * 9999),
    nome,
    idade,
    descricaoFisica,
    envolvimento: envolvimento|| [],
  };

  // Adiciona o novo suspeitos ao array de rapperRoutes
  suspeito.push(novosuspeitos);

  return res.status(201).json({
    message: "suspeitos cadastrado com sucesso!",
    novosuspeitos,
  });
});

// Rota para buscar um suspeitos pelo id
rapperRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeitos pelo id no array de suspeito
  const suspeitos = suspeito.find((suspeitos) => suspeitos.id == id);

  // Verifica se o suspeitos foi encontrado
  if (!suspeitos) {
    return res
      .status(404)
      .json({ message: `suspeitos com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeitos);
});

// Rota para atualizar um suspeitos pelo id
rapperRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, descricaoFisica, envolvimento } = req.body;

  // Busca um suspeitos pelo id no array de suspeito
  const suspeitos = suspeito.find((p) => p.id == id);

// Validação dos campos obrigatórios
if (!nome || !idade || !descricaoFisica || !envolvimento) {
  return res.status(400).json({
    message: "Os campos nome, idade, descricaofisica e envolvimento são obrigatórios!",
  });
}

// Validação de envolvimento
if (envolvimento != "sim" && envolvimento != "não") {
  return res.status(400).send({
    message: "Digite 'sim' ou 'não'!",
  });
}

suspeitos.nome = nome;
suspeitos.idade = idade;
suspeitos.descricaoFisica = descricaoFisica;
suspeitos.envolvimento = envolvimento || [];

return res.status(200).json({
  message: "suspeitos atualizado com sucesso!",
  suspeitos,
});
});

// Rota para deletar um suspeitos
rapperRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeitos pelo id no array de suspeitos
  const suspeitos = suspeitos.find((suspeitos) => suspeitos.id == id);

  // Verifica se o suspeitos foi encontrado
  if (!suspeitos) {
    return res
      .status(404)
      .json({ message: `suspeitos com id ${id} não encontrado!` });
  }

  // Remove o suspeitos do array de suspeito
  suspeito = suspeitos.filter((suspeitos) => suspeitos.id != id);

  return res.status(200).json({
    message: "suspeitos removido com sucesso!",
    suspeitos,
  });
});

export default rapperRoutes;