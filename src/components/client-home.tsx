"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Trash, Plus, List, Check, CircleX, ListCheck, Sigma } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import EditTask from "@/components/edit-task"

type Filter = "all" | "pending" | "done"

const ClientHome = ({ tasks }) => {
  const [activeFilter, setActiveFilter] = useState<Filter>("all")
  const [openDialog, setOpenDialog] = useState(false)

  console.log(tasks)

  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-[500px] p-4 space-y-4">

        {/* HEADER */}
        <CardHeader className="flex flex-row gap-2 p-0">
          <Input placeholder="Adicionar tarefa" />
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white flex items-center gap-2">
            <Plus size={18} />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent className="space-y-2 p-0">
          <Separator className="mb-5" />

          {/* FILTROS */}
          <div className="flex gap-2">
            <Badge onClick={() => setActiveFilter("all")}>Todas</Badge>
            <Badge onClick={() => setActiveFilter("pending")}>Pendentes</Badge>
            <Badge onClick={() => setActiveFilter("done")}>Concluídas</Badge>
          </div>

          <Separator className="my-2" />

          {/* LISTA DINÂMICA 🔥 */}
          {tasks.map((task) => (
            <div key={task.id} className="flex justify-between px-1 py-2">
              <span className="text-sm">{task.task}</span>

              <div className="flex gap-2">
                <EditTask />
                <Trash size={18} className="text-red-400 cursor-pointer" />
              </div>
            </div>
          ))}

          <Separator className="my-2" />

          {/* FOOTER */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas concluídas</p>
            </div>

            <Button
              onClick={() => setOpenDialog(true)}
              className="bg-red-500 text-white flex items-center gap-2"
            >
              <Trash size={16} />
              Limpar
            </Button>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">{tasks.length} tarefas</p>
          </div>
        </CardContent>
      </Card>

      {/* MODAL */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Limpar tarefas</DialogTitle>
            <DialogDescription>
              Essa ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="flex gap-2 mt-2">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>

            <Button
              className="bg-red-500 text-white"
              onClick={() => setOpenDialog(false)}
            >
              Confirmar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  )
}

export default ClientHome