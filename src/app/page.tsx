import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { Trash, Plus, List, Check, CircleX, SquarePen, ListCheck } from "lucide-react"

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-[500px] p-4 space-y-4">

        {/* Header */}
        <CardHeader className="flex flex-row gap-2 p-0">
          <Input placeholder="Adicionar tarefa" />

          <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white transition-colors flex items-center gap-2">
            <Plus size={18} />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent className="space-y-2 p-0">
          <Separator className="mb-5"/>

          {/* Filtros */}
          <div className="flex gap-2">
            <Badge className="flex items-center gap-1 cursor-pointer bg-blue-500 hover:bg-violet-500 text-white transition-colors">
              <List size={16} />
              Todas
            </Badge>

            <Badge className="flex items-center gap-1 cursor-pointer bg-blue-500 hover:bg-violet-500 text-white transition-colors">
              <CircleX size={16} />
              Não finalizadas
            </Badge>

            <Badge className="flex items-center gap-1 cursor-pointer bg-blue-500 hover:bg-violet-600 text-white transition-colors">
              <Check size={16} />
              Concluídas
            </Badge>
          </div>

          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border overflow-hidden">
            <div className="w-1 self-stretch bg-green-500 rounded-full -ml-3 mr-3"></div>
            <p className="text-sm font-medium flex-1">
              Estudar React
            </p>
            <div className="flex items-center gap-3">
              <SquarePen 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
              />
              <Trash 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border overflow-hidden">
            <div className="w-1 self-stretch bg-green-500 rounded-full -ml-3 mr-3"></div>
            <p className="text-sm font-medium flex-1">
              Estudar React
            </p>
            <div className="flex items-center gap-3">
              <SquarePen 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
              />
              <Trash 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-sm border overflow-hidden">
            <div className="w-1 self-stretch bg-green-500 rounded-full -ml-3 mr-3"></div>
            <p className="text-sm font-medium flex-1">
              Estudar React
            </p>
            <div className="flex items-center gap-3">
              <SquarePen 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
              />
              <Trash 
                size={18} 
                className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors"
              />
            </div>
          </div>

        </CardContent>

        <div>
          <ListCheck size={18}/>
          <p>Tarefas concluidas</p>
        </div>

      </Card>
    </main>
  )
}

export default Home