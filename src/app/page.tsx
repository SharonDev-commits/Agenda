import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { Plus, List, Check, CircleX, SquarePen } from "lucide-react"

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-4 space-y-4">
        
        {/* Header */}
        <CardHeader className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />

          <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-200 flex items-center gap-2">
            <Plus size={18} />
            Cadastrar
          </Button>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <Separator className="mb-2" />

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

          <div className="bg-red-400 h-14">
            <div className=" bg-green-500 h-8">
              <div className="w-2 h-full bg-green-100">
                <p>Estudar React</p>
                <div><SquarePen /></div>
              </div>
            </div>
          </div>

        </CardContent>

      </Card>
    </main>
  )
}

export default Home