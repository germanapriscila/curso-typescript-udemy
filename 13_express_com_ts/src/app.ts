import express, { NextFunction, Request, Response } from "express";

const app = express()

// 3 - middleware que permite executar JSON 
app.use(express.json())

// 11 - middleware para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
    console.log(req.path);
    next();
}  
app.use(showPath);

app.get("/", (req, res) => {
    return res.send("hello world")
})

// 3 - rota POST
app.post("/api/product", (req, res) => {
    console.log(req.body)
    return res.send("Produto cadastrado com sucesso")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
    // req.method = VERBO HTTP
    if (req.method === "POST") {
        return res.send("Inseriu algum registro")
    } else if (req.method === "GET") {
        return res.send("Leu algum registro")
    } else {
        return res.send("Esta operação não pode ser realizada")
    }
})

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

// 6 - enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Tenis",
        price: 129.00,
        color: "Grey",
        sizes: ["P", "M", "G"]
    })
})

// 7 - rota com parametro
app.get("/api/product/:id", (req: Request, res: Response) => {
    const id = req.params.id
    if (id === "1") {
        const product = {
            id: 1,
            name: "Boné",
            price: 19.90
        }
        return res.json(product)
    } else {
        return res.send("Produto não encontrado")
    }
    
})

// 8 - rota com mais parametros
app.get("/api/product/:id/review/:reviewId", (req: Request, res:Response) => {
    const id = req.params.id
    const review = req.params.reviewId
    return res.send(`Review: ${review} do produto: ${id}`)
})

// 9 - router handler
function getUser(req: Request, res: Response) {
    console.log(`Resgatando usuário com id: ${req.params.id}`);
  
    return res.send("O usuário foi encontrado!");
}
app.get("/api/user/:id", getUser);

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction) {
    if (req.params.id === "1") {
      console.log("Pode seguir!");
      next();
    } else {
      console.log("Acesso restrito");
    }
}
  
app.get("/api/user/:id/access", checkUser, (req: Request, res: Response, next: NextFunction) => {
      return res.json({ msg: "Bem-vindo a área administrativa!" });
    }
);

// 12 - req res com generics
app.get("/api/user/:id/details/:name", (req: Request<{ id: string; name: string }>, res: Response<{ status: boolean }>) => {
      console.log(`ID: ${req.params.id}`);
      console.log(`Name: ${req.params.name}`);  
      return res.json({ status: true });
    }
);

// 13 - tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
      throw new Error("Algo deu errado!");
    } catch (e: any) {
      res.statusCode = 500;
  
      res.status(500).json({ msg: e.message });
    }
});
  
app.listen(3000, () => {
    console.log("Aplicação rodando!")
})