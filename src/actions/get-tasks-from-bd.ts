import { length } from './../../node_modules/effect/src/MutableList';
import { prisma } from "@/lib/prisma";

export const getTasks = async() => {
    const tasks = await prisma.tasks.findMany()

    if(tasks.length === 0){
        console.log("Nenhuma tarefa encontrada")
    }
    console.log(tasks)
    return tasks
}