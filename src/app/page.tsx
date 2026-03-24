"use client"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash, Plus, List, Check, CircleX, SquarePen, ListCheck, Sigma } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog"
import EditTask from "@/components/edit-task"
import { getTasks } from "@/actions/get-tasks-from-bd"


type Filter = "all" | "pending" | "done"

const Home = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all")
  const [openDialog, setOpenDialog] = useState(false)
  const tasks = await getTasks() //await não roda em client server, usar o useEffect ou separar na camada de server, que é a melhor opção
  console.log(tasks)

  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-[500px] p-4 space-y-4">
        <CardHeader className="flex flex-row gap-2 p-0">
          <Input placeholder="Adicionar tarefa" />
          <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white transition-colors flex items-center gap-2">
            <Plus size={18} />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent className="space-y-2 p-0">
          <Separator className="mb-5" />

          <div className="flex gap-2">
            <Badge
              onClick={() => setActiveFilter("all")}
              className={`flex items-center gap-1 cursor-pointer text-white transition-colors ${
                activeFilter === "all"
                  ? "bg-violet-600 hover:bg-violet-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              <List size={16} />
              Todas
            </Badge>

            <Badge
              onClick={() => setActiveFilter("pending")}
              className={`flex items-center gap-1 cursor-pointer text-white transition-colors ${
                activeFilter === "pending"
                  ? "bg-violet-600 hover:bg-violet-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              <CircleX size={16} />
              Não finalizadas
            </Badge>

            <Badge
              onClick={() => setActiveFilter("done")}
              className={`flex items-center gap-1 cursor-pointer text-white transition-colors ${
                activeFilter === "done"
                  ? "bg-violet-600 hover:bg-violet-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              <Check size={16} />
              Concluídas
            </Badge>
          </div>

          <Separator className="my-2" />

          <div className="flex items-center justify-between px-1 py-2">
            <span className="text-sm text-gray-800">Estudar React</span>
            <div className="flex items-center gap-2">
              <EditTask />

              <Trash
                size={18}
                className="cursor-pointer text-red-400 hover:text-red-600 transition-colors"
              />
            </div>
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas concluídas</p>
            </div>
            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Trash size={16} />
              Limpar tarefas concluidas
            </Button>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div className="h-full w-[50%] bg-blue-500 rounded-md"></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">3 tarefas no total</p>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Limpar tarefas concluídas</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja remover todas as tarefas concluídas? Essa ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 mt-2">
            <DialogClose asChild>
              <Button variant="outline" className="cursor-pointer">
                Cancelar
              </Button>
            </DialogClose>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white cursor-pointer"
              onClick={() => setOpenDialog(false)}
            >
              <Trash size={16} />
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

export default Home