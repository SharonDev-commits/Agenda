import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { Plus, List, Check, CircleX } from "lucide-react"

const Home = () => {
  return (
    <main className="w-full h-screen bg-gray-100 flex justify-center items-center">
      <Card className="w-lg p-4 space-y-4">
        
        <div className="flex gap-2">
          <Input placeholder="Adicionar tarefa" />

          <Button className="cursor-pointer bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-200 flex items-center gap-2">
            <Plus size={18} />
            Cadastrar
          </Button>
        </div>

        <Separator />

        <div className="flex gap-2">
          <Badge className="flex items-center gap-1">
            <List size={16} />
            Todas
          </Badge>

          <Badge className="flex items-center gap-1">
            <CircleX size={16} />
            Não finalizadas
          </Badge>

          <Badge className="flex items-center gap-1">
            <Check size={16} />
            Concluídas
          </Badge>
        </div>

      </Card>
    </main>
  )
}

export default Home