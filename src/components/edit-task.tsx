import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { SquarePen } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

const EditTask = () => {
    return(
        <div>
            {/* Modal de edição com DialogTrigger */}
              <Dialog>
                <DialogTrigger asChild>
                  <SquarePen
                    size={18}
                    className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors"
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Editar tarefa</DialogTitle>
                    <DialogDescription>
                      Altere o nome da tarefa abaixo e clique em salvar.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex items-center gap-2 py-2">
                    <Input placeholder="Editar tarefa..." defaultValue="Estudar React" />
                    <DialogClose asChild>
                      <Button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white whitespace-nowrap">
                        <SquarePen size={16} />
                        Salvar
                      </Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
        </div>
    )
}

export default EditTask